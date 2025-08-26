import { useState } from "react";
import { X } from "lucide-react";

const Textfield = ({
  error,
  register,
  placeholder,
  inpType,
  textFieldValue,
}) => {
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState(null);
  const [inputKey, setInputKey] = useState(Date.now()); // 🔑 force re-render input

  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    

    setProgress(0);

    let progressBar = 0;
    const interval = setInterval(() => {
      progressBar += 10;
      setProgress(progressBar);

      if (progressBar >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setPreview(reader.result);
        }, 200);
      }
    }, 100);
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setPreview(null);
    setProgress(0);
    setInputKey(Date.now()); // 🔑 reset file input completely
  };

  return (
    <div>
      {inpType === "file" ? (
        <>
          <input
            key={inputKey}
            id={textFieldValue}
            type={inpType}
            {...register(textFieldValue, {
              required: `${inpType} is Required`,
              onChange: (e) => {
                handleFileChange(e);
              },
            })}
          />
          <label
            className="block w-full cursor-pointer rounded-lg border border-dashed border-gray-400 bg-gray-50 p-4 text-center text-gray-700 hover:bg-gray-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
            htmlFor={textFieldValue}
          >
            Click to Upload
            <span className="block text-sm text-gray-500 dark:text-zinc-300">
              {placeholder || " PNG, JPG, JPEG, etc."}
            </span>
          </label>

          {progress > 0 && (
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded h-2">
                <div
                  className="bg-blue-500 h-2 rounded transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                {progress}%
              </p>
            </div>
          )}

          {preview && (
            <div className="mt-3 relative inline-block">
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={handleReset}
                className="absolute -top-2 -right-2 cursor-pointer bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </>
      ) : (
        <input
          className="w-full mt-5 border rounded p-2.5 bg-white dark:bg-zinc-500 mb-6 dark:text-white text-zinc-900"
          type={inpType}
          placeholder={placeholder}
          {...register(`${textFieldValue}`, {
            required: `${inpType} is required`,
          })}
        />
      )}
    </div>
  );
};

export default Textfield;
