// components/TeamMember.js

import styles from './TeamMember.module.css';

export default function TeamMember({ name, role, bio }) {
  return (
    <div className={styles.memberCard}>
      <h3 className={styles.memberName}>{name}</h3>
      <p className={styles.memberRole}>{role}</p>
      <p className={styles.memberBio}>{bio}</p>
    </div>
  );
}
