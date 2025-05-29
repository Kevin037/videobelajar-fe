import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ButtonDisabled } from "@/components/Elements/button";
import Image from "next/image";
import { ProgressProps } from "@/services/types";
import { Card } from "@/components/Elements/card";
import { H2 } from "@/components/Elements/heading";

const ProgressPopover: React.FC<ProgressProps> = (props) => {
  const { id, progress, completeModule, totalModule } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <div
        className="cursor-pointer flex items-center space-x-2 text-green-600 hover:opacity-80"
        onClick={() => setIsOpen(!isOpen)}
      >
        {progress == 100 ? (
          <div className="flex items-center space-x-2 border border-green-300 rounded-lg p-2">
            <Image src="/assets/champion.svg" width={20} height={20} alt="" />
            <p>Ambil Serttifikat</p>
          </div>
        ) : (
          <>
            <div className="w-32 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-medium">{progress}%</span>
          </>
        )}
        <ChevronDown size={20} />
      </div>

      {/* Popover */}
      {isOpen && (
        <Card varian="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/progress.svg"
                width={32}
                height={32}
                alt="Progress icon"
                className="w-8 h-8"
              />
              <div>
                <H2>Progress Belajar</H2>
                <p className="text-sm text-gray-600">
                  {completeModule} dari {totalModule} modul selesai
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ButtonDisabled
                varian={`${progress != 100 ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
                url={`${progress != 100 ? "#" : `/certificate/${id}`}`}
              >
                Ambil Sertifikat
              </ButtonDisabled>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ProgressPopover;
