import React, {useState} from 'react'
import ExperienceItem from '../../UI/ExperienceItem'
import uniqid from 'uniqid';
import EditBtn from '../../UI/EditBtn'
import CVExperiencePopup from './CVExperiencePopup';

const CVExperience = () => {
  const [modal, setModal] = useState(false);
  const [experienceList, setExperienceList] = useState([
    {
      profession: 'You Profesion Here',
      name: 'Company name here',
      location: 'location',
      time: 'years',
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum pariatur saepe laboriosam atque quibusdam eos perspiciatis amet voluptas accusantium officia necessitatibus rem, sequi beatae eligendi praesentium voluptatem voluptatibus, ullam eveniet!',
      id: uniqid()
    },
    {
      profession: 'You Profesion Here',
      name: 'Company name here',
      location: 'location',
      time: 'years',
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum pariatur saepe laboriosam atque quibusdam eos perspiciatis amet voluptas accusantium officia necessitatibus rem, sequi beatae eligendi praesentium voluptatem voluptatibus, ullam eveniet!',
      id: uniqid()
    },
    {
      profession: 'You Profesion Here',
      name: 'Company name here',
      location: 'location',
      time: 'years',
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum pariatur saepe laboriosam atque quibusdam eos perspiciatis amet voluptas accusantium officia necessitatibus rem, sequi beatae eligendi praesentium voluptatem voluptatibus, ullam eveniet!',
      id: uniqid()
    },
    {
      profession: 'You Profesion Here',
      name: 'Company name here',
      location: 'location',
      time: 'years',
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum pariatur saepe laboriosam atque quibusdam eos perspiciatis amet voluptas accusantium officia necessitatibus rem, sequi beatae eligendi praesentium voluptatem voluptatibus, ullam eveniet!',
      id: uniqid()
    },
  ]);

  const states = { modal, experienceList };
  const setStates = { setModal, setExperienceList };
  return (
    <div onClick={() => {setModal(true)}} className='cv__experience section'>
      <h3 className="experience__title regular__title">Work experience</h3>
      <ul className='cv__experience-list'>
        {experienceList.map(item => (
          <ExperienceItem
            key={uniqid()}
            profession={item.profession}
            name={item.name}
            location={item.location}
            time={item.time}
            about={item.about}
          />
        ))}
      </ul>
      <EditBtn />
      <CVExperiencePopup states={states} setStates={setStates}/>
    </div>
  )
}

export default CVExperience