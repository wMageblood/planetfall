import DetailedCharacterCard from "../DetailedCharacterCard/DetailedCharacterCard";

const CharacterImport = () => {
  return (
    <div className="max-w-full">
      <div className="flex justify-between">
        <h1 className="mx-3 my-2 p-1 text-2xl">Max Level Characters</h1>
        <div>
          <button className="rare-button-style">Refresh</button>
          <button className="uncommon-button-style">Import</button>
        </div>
      </div>

      <div className="flex flex-wrap">
        <DetailedCharacterCard />
      </div>
    </div>

  )
}

export default CharacterImport;