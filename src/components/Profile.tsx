import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/mhagner.png" alt="Mahilson"/>
            <div>
                <strong>Mahilson Hagnner</strong>
                <p>
                    <img src="icons/start-up.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}