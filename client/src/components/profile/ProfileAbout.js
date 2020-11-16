import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  // Destructure profile to get what we need for this component as props to pass into the return section below
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div class='profile-about bg-light p-2'>
      {
        // If there is a bio in the profile, display the bio in a <Fragment>
        // Trim the name, split the string into an comma separated array, then display the [0] index (which is the first name) to show only the first name's bio
      }
      {
       // {bio && (
       // <Fragment>
       //   <h2 class='text-primary'>{name.trim().split(' ')[0]}'s Bio</h2>
       //   <p>{bio}</p>
       //   <div class='line'></div>
       // </Fragment>
       //     )}
      }
      

      <h2 class='text-primary'>Skill Set</h2>
      {
        // Need to map through the skill sets since it's an array in profile and assign an index key to each skill
        // Each skill will have a check mark icon next to it
      }
      <div class='skills'>
        {skills.map((skill, index) => (
          <div key={index} class='p-1'>
            <i class='fas fa-check'></i> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
