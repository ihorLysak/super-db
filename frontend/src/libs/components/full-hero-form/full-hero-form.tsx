import React, { useRef } from "react";
import { FullSuperheroDto } from "../../types/types";
import { ValueOf } from "../../types/types";
import { FormType } from "../../enums/enums";
interface Properties {
  type: ValueOf<typeof FormType>;
  fullHeroDetails?: FullSuperheroDto;
}

const getHeader = (type: ValueOf<typeof FormType>) => {
  switch (type) {
    case FormType.CREATE: {
      return <h2>Create Hero</h2>;
    }
    case FormType.DETAILS: {
      return <h2>Hero Details</h2>;
    }
    case FormType.EDIT: {
      return <h2>Edit Hero</h2>;
    }
  }
};

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
      {getHeader(type)}
      <div>
        <label htmlFor="nickname">nickname:</label>
        <input
          type="text"
          name="nickname"
          id="nickname"
          value={fullHeroDetails?.nickname || ""}
          ref={nicknameInputRef}
        />
      </div>
      <div>
        <label htmlFor="real_name">real name:</label>
        <input
          type="text"
          name="real_name"
          id="real_name"
          value={fullHeroDetails?.real_name || ""}
          ref={realNameInputRef}
        />
      </div>
      <div>
        <label htmlFor="origin_description">origin:</label>
        <input
          type="textarea"
          name="origin_description"
          id="origin_description"
          value={fullHeroDetails?.origin_description || ""}
          ref={originInputRef}
        />
      </div>
      <div>
        <label htmlFor="superpowers">superpowers:</label>
        <input
          type="text"
          name="superpowers"
          id="superpowers"
          value={fullHeroDetails?.superpowers || ""}
          ref={superpowersInputRef}
        />
      </div>
      <div>
        <label htmlFor="catch_phrase">catch phrase:</label>
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
