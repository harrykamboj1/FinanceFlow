import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";
type Props = {
  onUpload: (result: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button className="w-full lg:w-auto" size={"sm"} {...getRootProps()}>
          <Upload className="size-4 mr-2" />
          Import
        </Button>
      )}
    </CSVReader>
  );
};
