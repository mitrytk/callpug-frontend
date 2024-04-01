import heic2any from "heic2any";

export async function getCroppedImg(
  imageSrc: string,
  pixelCrop: { width: number; height: number; x: number; y: number },
  rotation = 0
): Promise<string> {
    // const resizeImg = await resizeImage(imageSrc, 2000, 2000);
  const image: HTMLImageElement = await createImage(imageSrc);
  const canvas: HTMLCanvasElement = document.createElement("canvas");
  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

  const maxSize: number = Math.max(image.width, image.height);
  const safeArea: number = 2 * ((maxSize / 2) * Math.sqrt(2));

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea;
  canvas.height = safeArea;

  // translate canvas context to a central location on image to allow rotating around the center.
  if (ctx) {
    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.rotate(getRadianAngle(rotation));
    ctx.translate(-safeArea / 2, -safeArea / 2);

    // draw rotated image and store data.
    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    );
    const data: ImageData | null = ctx.getImageData(0, 0, safeArea, safeArea);

    if (data) {
      // set canvas width to final desired crop size - this will clear existing context
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      // paste generated rotate image with correct offsets for x,y crop values.
      ctx.putImageData(
        data,
        Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
        Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
      );

      // As Base64 string
    //   return canvas.toDataURL('image/jpeg');

      // As a blob
      return new Promise<string>((resolve) => {
        canvas.toBlob((file) => {
          if (file) {
            resolve(URL.createObjectURL(file));
          }
        }, "image/jpeg");
      });
    } else {
      throw new Error("Failed to get image data.");
    }
  } else {
    throw new Error("Failed to get 2D context from canvas.");
  }
}

type ScriptLoadCallback = () => void;

function loadScript(url: string, callback: ScriptLoadCallback): void {
    let script: any | null = document.querySelector('script[src="' + url + '"]');
    
    if (script) {
        if (!script.readyState && !script.onload) {
            callback();
        } else {
            let secs = 0;
            let thisInterval = setInterval(function() {
                secs++;
                if (!script!.readyState && !script!.onload) {
                    clearInterval(thisInterval);
                    callback();
                } else if (secs === 10) {
                    clearInterval(thisInterval);
                    console.log('Could not load ' + url);
                }
            }, 1000);
        }
        return;
    }

    script = document.createElement('script');
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script!.readyState === 'loaded' || script!.readyState === 'complete') {
                script!.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function() {
            script!.onload = null;
            callback();
        };
    }

    script.src = url;
}

 export function isHEIC(file: any) { // check file extension since windows returns blank mime for heic
    let x = file.type ? file.type.split('image/').pop() : file.name.split('.').pop().toLowerCase();
    return x === 'heic' || x === 'heif';
}

export function convertHEIC(file: any): Promise<any> {
    return new Promise<File>((resolve) => {
        if (!isHEIC(file)) return resolve(file);
        loadScript('https://cdn.jsdelivr.net/npm/heic2any@0.0.3/dist/heic2any.min.js', function() {
            heic2any({
                blob: file,
                toType: "image/jpg"
            }).then(function (convertedFile: any) {
                convertedFile.name = file.name.substring(0, file.name.lastIndexOf('.')) + '.jpeg';
                resolve(convertedFile);
            });
        });
    });
}

export function resizeImage(imageData: string, maxWidth: number, maxHeight: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.src = imageData;

        img.onload = () => {
            const width = img.width;
            const height = img.height;


            if (width > maxWidth || height > maxHeight) {
                const ratio = Math.min(maxWidth / width, maxHeight / height);
                const newWidth = width * ratio;
                const newHeight = height * ratio;

                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = newWidth;
                canvas.height = newHeight;

                ctx?.drawImage(img, 0, 0, newWidth, newHeight);

                const resizedImageDataUrl = canvas.toDataURL('image/jpeg');
                resolve(resizedImageDataUrl);
            } else {
                // Возвращаем изображение без изменений, если оно соответствует условиям
                resolve(imageData);
            }
        };

        img.onerror = () => reject(new Error('Failed to load image'));
    });
}

function createImage(imageSrc: string): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
  });
}

function getRadianAngle(degreeValue: number): number {
  return (degreeValue * Math.PI) / 180;
}
