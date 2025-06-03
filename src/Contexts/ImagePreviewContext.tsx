import React, {
  createContext,
  useState
} from "react";

type ImagePreviewContextType = {
  imageSrc: string;
  setImageSrc: (arg0: string) => void;
  description: string;
  setDescription: (arg0: string) => void;
  isPreviewModalOpen: boolean;
  setPreviewModalOpen: (arg0: boolean) => void;
};

type ImagePreviewProviderProps = {
  children: React.ReactNode;
};

const defaultContext: ImagePreviewContextType = {
  imageSrc: "",
  setImageSrc: () => {},
  description: "",
  setDescription: () => {},
  isPreviewModalOpen: false,
  setPreviewModalOpen: () => {},
};

export const ImagePreviewContext =
  createContext<ImagePreviewContextType>(defaultContext);

export default function ImagePreviewProvider({
  children,
}: ImagePreviewProviderProps) {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isPreviewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  return (
    <ImagePreviewContext.Provider
      value={{
        imageSrc,
        setImageSrc,
        description,
        setDescription,
        isPreviewModalOpen,
        setPreviewModalOpen,
      }}
    >
      {children}
    </ImagePreviewContext.Provider>
  );
}
