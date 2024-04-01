import { ChangeEvent, useState } from "react";
import Cropper from "react-easy-crop";

import {
  ContainerPhoto,
  CookingStepItem,
  IconAddPfotoSVG,
  ImagePreview,
  InputPhoto,
  LabelPhoto,
  CropperContainer,
  BtnSaveCroppedImg,
} from "./CookingStep.styled";
import { CookingStepI } from "./CookingStep.types";
import { convertHEIC, getCroppedImg, resizeImage} from "../../CropImg";

interface CropData {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const CookingStep = ({ handleChangeStep }: CookingStepI) => {
  const [src, setSrc] = useState<string | undefined>(undefined);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState<string>("");
  const [isCropShow, setIsCropShow] = useState<boolean>(false);
  const [croppedAreaPx, setCroppedAreaPx] = useState<CropData>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onCropComplete = (
    croppedArea: CropData,
    croppedAreaPixels: CropData
  ) => {
    setCroppedAreaPx(croppedAreaPixels);
  };

  const handleCropChange = (cropNew: { x: number; y: number }) => {
    setCrop(cropNew);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      convertHEIC(file).then(function (resFile) {
        const reader = new FileReader();
        reader.onload = async() => {
            const resizeImg = await resizeImage(reader.result as string, 2000, 2000);
          setSrc(resizeImg);
          setIsCropShow(true);
        };
        reader.readAsDataURL(resFile);
      });
    }
  };

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!src || !croppedAreaPx) return;

    const croppedImageNew = await getCroppedImg(src, croppedAreaPx);
    // console.log(croppedImageNew);

    setCroppedImage(croppedImageNew);
    // console.log(croppedImageNew);
    setIsCropShow(false);
  };

  return (
    <CookingStepItem>
      <ContainerPhoto>
        <InputPhoto
          type="file"
          id="stepPhoto"
          onChange={handleFileChange}
          accept="image/*,.heic,.heif"
        />
        <LabelPhoto htmlFor="stepPhoto">
          <IconAddPfotoSVG />
        </LabelPhoto>
        {croppedImage && <ImagePreview src={croppedImage} alt="Preview" />}
        <CropperContainer>
          {isCropShow && (
            <>
              <Cropper
                image={src}
                crop={crop}
                zoom={zoom}
                aspect={16 / 9}
                onCropChange={handleCropChange}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                disableAutomaticStylesInjection={true}
              />
              <BtnSaveCroppedImg onClick={handleSave}>Готово</BtnSaveCroppedImg>
            </>
          )}
        </CropperContainer>
      </ContainerPhoto>
    </CookingStepItem>
  );
};
