import React from 'react';

// Chakra-ui

import { Image } from '@chakra-ui/image';

const ProfilePic = ({ boxSize } : {boxSize:number}) => (
  <Image
    borderRadius="full"
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Bvqwa7btOfZtjER7flS2HAHaLH%26pid%3DApi&f=1"
    alt="dog"
    fit="cover"
    boxSize={boxSize}
  />
);

export default ProfilePic;
