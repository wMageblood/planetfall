import { useState, useRef } from 'react';

const gearProps = {
  realm: '',
  name: '',
  active_spec_name: '',
  thumbnail_url: '',
  gear: {
    items: {
      head: {
        name: '',
        icon: '',
        item_level: '',
      },
      neck: {
        name: '',
        icon: '',
        item_level: '',
      }
    }
  }
}

const CharacterFetcher = () => {

  const [gearProperties, setGearProperties] = useState(gearProps);
  const inputValue = useRef<HTMLInputElement | null>(null)
  const zamImg = 'https://wow.zamimg.com/images/wow/icons/large/';

  const handleGear = async () => {

    const characterName = inputValue.current!.value;
    const response = await fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=Galakrond&name=${characterName}&fields=gear`)

    try {

      if (!response.ok) {
        throw new Error(`Character name not found. Response Number: ${response.status}`)
      }

      const data = await response.json();
      console.log(`Nombre del personaje es: ${characterName}`)
      setGearProperties(data);

    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div>
      <button className='bg-slate-500/50 m-2 p-3 rounded-sm' onClick={handleGear}> Import Gear </button>
      <input ref={inputValue} className='bg-slate-800/50 m-2 p-3 rounded-sm' placeholder='char name'></input>
      <div className='m-2 p-2'>
        <h1>Gear:</h1>
        <p>Server: {gearProperties.realm}</p>
        <p>Name: {gearProperties.name}</p>
        <p>Active_spec_name: {gearProperties.active_spec_name}</p>
        <img className={`size-26 rounded-full mb-2`} src={gearProperties.thumbnail_url} />
        <div>
          <p>Head Object: {gearProperties.gear.items.head.name}</p>
          <img src={`${zamImg}${gearProperties.gear.items.head.icon}.jpg`} />
          <p className='font-bold relative bottom-5 left-4 text-qualityEpic text-shadow-lg/100 cursor-default'>{gearProperties.gear.items.head.item_level}</p>
        </div>
        <div>
          <p>Neck Object: {gearProperties.gear.items.neck.name}</p>
          <img src={`${zamImg}${gearProperties.gear.items.neck.icon}.jpg`} />
          <p className='font-bold relative bottom-5 left-4 text-qualityEpic text-shadow-lg/100 cursor-default'>{gearProperties.gear.items.neck.item_level}</p>
        </div>
      </div>
    </div>
  );
};


export default CharacterFetcher;