import React, { useRef } from "react";
import { FullSuperheroDto } from "../../types/types";

interface Properties {
  type: "Create" | "Edit";
  fullHeroDetails?: FullSuperheroDto;
}

const FullHeroForm: React.FC<Properties> = ({
  type,
  fullHeroDetails,
}: Properties) => {
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const realNameInputRef = useRef<HTMLInputElement>(null);
  const originInputRef = useRef<HTMLInputElement>(null);
  const superpowersInputRef = useRef<HTMLInputElement>(null);
  const catchPhraseInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const heroPayload = {
      nickname: nicknameInputRef.current?.value as string,
      real_name: realNameInputRef.current?.value as string,
      origin_description: originInputRef.current?.value as string,
      superpowers: superpowersInputRef.current?.value as string,
      catch_phrase: catchPhraseInputRef.current?.value as string,
    };

    //api call
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{`${type} hero`}</h2>
      <div>
        <input
          type="text"
          name="nickname"
          id="nickname"
          value={fullHeroDetails?.nickname || ""}
          ref={nicknameInputRef}
        />
      </div>
      <div>
        <input
          type="text"
          name="real_name"
          id="real_name"
          value={fullHeroDetails?.real_name || ""}
          ref={realNameInputRef}
        />
      </div>
      <div>
        <input
          type="textarea"
          name="origin_description"
          id="origin_description"
          value={fullHeroDetails?.origin_description || ""}
          ref={originInputRef}
        />
      </div>
      <div>
        <input
          type="text"
          name="superpowers"
          id="superpowers"
          value={fullHeroDetails?.superpowers || ""}
          ref={superpowersInputRef}
        />
      </div>
      <div>
        <input
          type="text"
          name="catch_phrase"
          id="catch_phrase"
          value={fullHeroDetails?.catch_phrase || ""}
          ref={catchPhraseInputRef}
        />
      </div>
    </form>
  );
};

export { FullHeroForm };
