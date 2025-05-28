"use client";

import { useState } from "react";

import { FileInput } from "@/components/file-input";
import { FormField } from "@/components/form-field";
import { useFileInput } from "@/lib/hooks/use-file-input";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";

const UploadPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      if (!video.file || !thumbnail.file) {
        setError("Please upload video and thumbnail");
        return;
      }

      if (!formData.title || !formData.description) {
        setError("Please fill in all the details");
        return;
      }

      // upload video to Bunny
      // upload thumbnail to DB
      // attach thumbnail
      // create a new DB entry for the video details (urls, data)
    } catch (error) {
      console.log("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>

      {error && <div className="error-field">{error}</div>}

      <form
        onSubmit={handleSubmit}
        className="rounded-20 shadow-10 flex w-full flex-col gap-6 px-5 py-7.5"
      >
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a clear and concise video title"
        />

        <FormField
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe what this video is about"
          as="textarea"
        />

        <FileInput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />

        <FileInput
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />

        <FormField
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          as="select"
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Uploading..." : "Upload video"}
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
