/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import styles from "../styles/ourTeam.module.css";
import motorcycle from "../public/icons/motorcycle.png";
import medal from "../public/icons/medal.png";
import gamepad from "../public/icons/gamepad.png";
import severynov from "../public/icons/severynov.png";
import kompanets from "../public/icons/kompanets.png";
import lytvyn from "../public/icons/lytvyn.png";
import opanasenko from "../public/icons/opanasenko.png";
import tritecki from "../public/icons/tritecki.png";
import bas from "../public/icons/bas.png";
import owl from "../public/icons/owl.png";
import linkedin from "../public/icons/linkedin.png";
import lamp from "../public/icons/lamp.png";

import Image from "next/image";
import { FlashOnRounded, Subtitles } from "@material-ui/icons";

const OurTeam = () => {

  const [listOfFactsOwl, setListOfFactsOwl] = useState([
      'Many owl species have asymmetrical ears. When located at different heights on the owl’s head, their ears are able to pinpoint the location of sounds in multiple dimensions. Ready, aim, strike.',
      'The eyes of an owl are not true “eyeballs.” Their tube-shaped eyes are completely immobile, providing binocular vision which fully focuses on their prey and boosts depth perception.',
      'Owls can rotate their necks 270 degrees. A blood-pooling system collects blood to power their brains and eyes when neck movement cuts off circulation.',
      'A group of owls is called a parliament. This originates from C.S. Lewis’ description of a meeting of owls in The Chronicles of Narnia.',
      'Owls hunt other owls. Great Horned Owls are the top predator of the smaller Barred Owl.',
      'The Northern Hawk Owl can detect—primarily by sight—a vole to eat up to a half a mile away.',
      'Barn Owls swallow their prey whole—skin, bones, and all—and they eat up to 1,000 mice each year.',
      'Not all owls hoot! Barn Owls make hissing sounds, the Eastern Screech-Owl whinnies like a horse, and Saw-whet Owls sound like, well, an old whetstone sharpening a saw. Hence the nam.',
      'Northern Saw-whet Owls can travel long distances over large bodies of water. One showed up 70 miles from shore near Montauk, New York.',
      'The tiniest owl in the world is the Elf Owl, which is 5 - 6 inches tall and weighs about 1 ½ ounces. The largest North American owl, in appearance, is the Great Gray Owl, which is up to 32 inches tall.',
  ])
  const [teammates, setTeammates] = useState([
    {
      name: "Denis Bas",
      position: "Backend developer",
      extendsPosition: "Head Of Backend Department",
      description:
        "Young and progressive backend developer. Team lead of a competent and proficient Python crew, whose management is only one of the flawlessly perfected skills his leader quality has to offer. Having delivered a big amount of  high-quality projects quickly and efficiently, fast doesn’t equal awful in his case. Well-rounded, playful, trustworthy, this guy is a perfect balance of a good friend and a truly astonishing professional.",
      facts: [
        {
          image: motorcycle,
          fact: "motorcycle lover",
        },
        {
          image: medal,
          fact: "snake charmer",
        },
        {
          image: gamepad,
          fact: "water polo cms ",
        },
      ],
      photo: bas,
      linkedin: "https://ua.linkedin.com/",
      isActive: false,
    },
    {
      name: "Nikita Companets",
      position: "CEO",
      extendsPosition: "Chief Executive Officer",
      description:
        "Have you ever known a person exceptionaly dedicated to his work? Inspiring, easy-going, motivating, our CEO is a self-made professional, that easily combines a father-like boss figure and impellingly strategic skills. Having smoothly perfected his roles of a project manager, business analyst, blogger and developer, Nikita is that kind of a  person you should definitely look up to. We can proudly say he inspired and supported an incredible amount of customers on the path of reaching their goals, helping them bring their ideas to life and overcoming any trouble for the successful business approach.",
      facts: [
        {
          image: motorcycle,
          fact: "motorcycle lover",
        },
        {
          image: medal,
          fact: "dreams of becoming iron man,",
        },
        {
          image: gamepad,
          fact: "Dota2 high mmr player",
        },
      ],
      photo: kompanets,
      linkedin: "https://ua.linkedin.com/",
      isActive: true,
    },
    {
      name: "Grigoriy Opanasenko",
      position: "Chief Technology Officer",
      extendsPosition: "Chief Technology Officer",
      description: "",
      facts: [
        {
          image: motorcycle,
          fact: "motorcycle lover",
        },
        {
          image: medal,
          fact: "studies OOP since 12 y.o",
        },
        {
          image: gamepad,
          fact: "equila fan",
        },
      ],
      photo: opanasenko,
      linkedin: "https://ua.linkedin.com/",
      isActive: false,
    },
    {
      name: "Danylo Lytvyn",
      position: " Director Of Engineering",
      extendsPosition: " Director Of Engineering",
      description: "",
      facts: [
        {
          image: motorcycle,
          fact: "loves weekends",
        },
        {
          image: medal,
          fact: "enjoys seeing people’s growth",
        },
        {
          image: gamepad,
          fact: "always listens to people",
        },
      ],
      photo: lytvyn,
      linkedin: "https://ua.linkedin.com/",
      isActive: false,
    },
    {
      name: "Oleksandr Severynov",
      position: "Sales manager",
      extendsPosition: "Chief Sales Officer",
      description:
        "Seems hard finding a truly reliable sales manager nowadays, isn’t it? Well our CSO is a remarkable specialist, one of his phenomenal kind. Farsighted, Cooperative and Confident, he’ll sort out any difficulties momentarily. Polished to their maximum, his communication skills are jaw-dropping and the management competencies he constantly improves are a great contribution that outstandingly strengthens and encourages our team on day to day basis.",
      facts: [
        {
          image: motorcycle,
          fact: "winner of the 2017 Comedy Festival in Kyiv,",
        },
        {
          image: medal,
          fact: "plays 4 music instruments, ",
        },
        {
          image: gamepad,
          fact: "skydiving fan",
        },
      ],
      photo: severynov,
      linkedin: "https://ua.linkedin.com/",
      isActive: false,
    },
    {
      name: "Oleksandr Tritecki",
      position: "Frontend developer",
      extendsPosition: "Head Of Frontend Deprtament",
      description:
        "Certified Angular professional with a great team of talented girls. Has exceptional taste in design and is unique in it’s implementation. Diligent, always ready to help and offer new innovative ideas that would compliment your own, but with a superior performance and client-side experience. Easy-going, compassionate and responsible, he is the perfect guide to your startup visuals.",

      facts: [
        {
          image: motorcycle,
          fact: " Survival concept enthusiast",
        },
        {
          image: medal,
          fact: "Led by the road of adventure",
        },
        {
          image: gamepad,
          fact: "“Toss a coin to your …(witcher icon)”",
        },
      ],
      photo: tritecki,
      linkedin: "https://ua.linkedin.com/",
      isActive: false,
    },
  ]);
  
  const [clickOwl, setClickOwl] = useState(false);
  const [clickTrigger, setClickTrigger] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const getActiveUser = () => {
    let activeUser = teammates.find((e) => e.isActive);
    return activeUser;
  };


  const getRandomFactOfOwl = (random) => {
    return listOfFactsOwl[random];
  }
  const changeActiveUser = (user) => {
    setClickTrigger(true);
    setTimeout(() => {
      setTeammates(
        teammates.map((el) => {
          if (el.name === user.name) {
            return { ...el, isActive: true };
          }
          return { ...el, isActive: false };
        })
      );
    }, 500);
    setTimeout(() => {
      setClickTrigger(false);
    }, 500);
  };
  const [onmouse, setOnmouse] = useState(false);

  const [count, setCount] = React.useState(0);

  const handleClickOutside = () => {
    setCount(0);
  };
  const handleHeaderClick = (event) => {
    if (!event.nativeEvent.path.filter(el => el.id === 'block_owl').length) {
      setClickOwl(false)
    }  
  };


  return (
    <div className={styles.wise_vision_team} onClick={handleHeaderClick}>
      <div className={styles.block_for_information}>
        <h1 className={styles.title}>Our Wise Vision Team </h1>
        <div className={styles.header}>
          <h2 className={styles.for_name}>
            <span
              className={`${styles.user_name} ${
                clickTrigger ? styles.user_name_active : ""
              }`}
            >
              <span>{getActiveUser().name}</span>
            </span>
            <span className={styles.for_vertical_line}>|</span>
            <span
              className={`${styles.for_ceo} ${
                clickTrigger ? styles.user_position_active : ""
              }`}
            >
              <span>{getActiveUser().position}</span>
            </span>
          </h2>
          <div className={styles.block_for_owl_animation} onClick={() => {setRandomNumber(Math.floor(Math.random() * 10)); }}>
            <div id="block_owl" className={styles.block_for_owl} onMouseEnter={() => {setOnmouse (true);}} onMouseLeave={() => {setOnmouse (false);}} onClick={() => {setClickOwl(!clickOwl)}}>
              <Image className={styles.photo}src={owl} alt={owl}></Image>
            </div>
            <div className={ onmouse && !clickOwl ? styles.block_for_lamp : styles.none}>
              <Image src={lamp} alt={lamp}></Image>
            </div>
            <div className={clickOwl ? styles.tooltip : styles.none}>
              <p className={styles.tooltip_text}>
                {getRandomFactOfOwl(randomNumber)}
              </p>
            </div>
          </div>
        </div>
        <p
          className={`${styles.for_description} ${
            clickTrigger ? styles.for_description_active : ""
          }`}
        >
          {getActiveUser().description}
        </p>
        <div className={`${styles.block_for_hobbies}`}>
          {getActiveUser().facts.map((fact) => (
            <div className={styles.container_for_hobby}>
              <Image src={fact.image} alt="" />
              <p>{fact.fact}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.block_for_photos}>
        {teammates.map((element) => (
          <div className={styles.grid_element}>
            <button
              className={`${styles.position} ${
                element.isActive ? styles.activeUser : ""
              }`}
              onClick={() => {
                changeActiveUser(element);
              }}
            >
              <div className={styles.personal_img_block}>
                <Image
                  className={styles.personal_img}
                  alt={element.name}
                  src={element.photo}
                ></Image>
              </div>
              <div
                className={styles.block_for_description}
                href={element.linkedin}
              >
                <p className={styles.for_text}>{element.extendsPosition}</p>
                <Image
                  className={styles.linkedin}
                  src={linkedin}
                  alt=""
                ></Image>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
