import React from 'react'
import styles from '../styles/Home.module.css';

const Card = ({data}) => {
    return (
        <a
        key={data.id}
        href={data.links.video_link}
        target="_blank"
        className={styles.card}
      >
        <img
          src={
            data.links.mission_patch
              ? data.links.mission_patch
              : 'https://cdn141.picsart.com/328632091130201.jpg?to=crop&type=webp&r=310x310&q=75'
          }
          alt={data.mission_name}
        />
        <h2>{data.mission_name}</h2>
        <p>{data.launch_site.site_name_long}</p>
        <p>
          {new Date(data.launch_date_local).toLocaleDateString('en-US')}
        </p>
      </a>
    )
}

export default Card
