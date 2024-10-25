import React, { useRef, useEffect } from "react";
import { FullSuperheroDto } from "../../types/types";

import styles from "./styles.module.css";

interface Properties {
  type?: "Create" | "Edit" | "View";
  fullHeroDetails?: FullSuperheroDto;
  onSubmit?: (payload: FormData, id?: number) => void;
}

const FullHeroForm: React.FC<Properties> = ({
  type,
  fullHeroDetails,
  onSubmit,
}: Properties) => {
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const realNameInputRef = useRef<HTMLInputElement>(null);
  const originInputRef = useRef<HTMLTextAreaElement>(null);
  const superpowersInputRef = useRef<HTMLInputElement>(null);
  const catchPhraseInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (fullHeroDetails) {
      if (nicknameInputRef.current)
        nicknameInputRef.current.value = fullHeroDetails.nickname || "";

      if (realNameInputRef.current)
        realNameInputRef.current.value = fullHeroDetails.real_name || "";

      if (originInputRef.current)
        originInputRef.current.value = fullHeroDetails.origin_description || "";

      if (superpowersInputRef.current)
        superpowersInputRef.current.value = fullHeroDetails.superpowers || "";

      if (catchPhraseInputRef.current)
        catchPhraseInputRef.current.value = fullHeroDetails.catch_phrase || "";
    }
  }, [fullHeroDetails]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nickname", nicknameInputRef.current?.value || "");
    formData.append("real_name", realNameInputRef.current?.value || "");
    formData.append("origin_description", originInputRef.current?.value || "");
    formData.append("superpowers", superpowersInputRef.current?.value || "");
    formData.append("catch_phrase", catchPhraseInputRef.current?.value || "");

    if (imageInputRef.current?.files) {
      Array.from(imageInputRef.current.files).forEach((file) => {
        formData.append("images", file);
      });
    }

    if (onSubmit) {
      onSubmit(formData, fullHeroDetails?.id);
    }
  };

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <div className={styles["names-wrapper"]}>
        <div className={styles["input-container"]}>
          <label htmlFor="nickname">nickname:</label>
          <input
            className={styles["input"]}
            type="text"
            name="nickname"
            id="nickname"
            ref={nicknameInputRef}
            required
            disabled={type === "View" && true}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="real_name">real name:</label>
          <input
            className={styles["input"]}
            type="text"
            name="real_name"
            id="real_name"
            ref={realNameInputRef}
            required
            disabled={type === "View" && true}
          />
        </div>
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="origin_description">origin:</label>
        <textarea
          className={styles["textarea"]}
          name="origin_description"
          id="origin_description"
          ref={originInputRef}
          required
          disabled={type === "View" && true}
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="superpowers">superpowers:</label>
        <input
          className={styles["input"]}
          type="text"
          name="superpowers"
          id="superpowers"
          ref={superpowersInputRef}
          required
          disabled={type === "View" && true}
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="catch_phrase">catch phrase:</label>
        <input
          className={styles["input"]}
          type="text"
          name="catch_phrase"
          id="catch_phrase"
          ref={catchPhraseInputRef}
          required
          disabled={type === "View" && true}
        />
      </div>
      {type !== "View" && (
        <>
          <div className={styles["input-container"]}>
            <label htmlFor="image">Upload Images:</label>
            <input
              className={styles["input"]}
              type="file"
              name="image"
              id="image"
              ref={imageInputRef}
              accept="image/*"
              multiple
            />
          </div>
          <button className={styles["button"]}>{type}</button>
        </>
      )}{" "}
    </form>
  );
};

export { FullHeroForm };
