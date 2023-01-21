import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

import { socialApi } from '../../../__fake-api__/social-api';
import { useMounted } from '../../../hooks/use-mounted';

import { SocialAbout } from './social-about';
import { SocialPostAdd } from './social-post-add';
import { SocialPostCard } from './social-post-card';

import type { Post, Profile } from '../../../types/social';
import type { FC } from 'react';

interface SocialProfileTimelineProps {
  profile: Profile;
}

export const SocialTimeline: FC<SocialProfileTimelineProps> = (props) => {
  const isMounted = useMounted();
  const { profile, ...other } = props;
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    try {
      const data = await socialApi.getPosts();

      if (isMounted()) {
        setPosts(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div {...other}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          xs={12}
        >
          <SocialAbout
            currentCity={profile.currentCity}
            currentJobCompany={profile.currentJobCompany}
            currentJobTitle={profile.currentJobTitle}
            email={profile.email}
            originCity={profile.originCity}
            previousJobCompany={profile.previousJobCompany}
            previousJobTitle={profile.previousJobTitle}
            profileProgress={profile.profileProgress}
            quote={profile.quote}
          />
        </Grid>
        <Grid
          item
          lg={8}
          xs={12}
        >
          <SocialPostAdd />
          {posts.map((post) => (
            <Box
              key={post.id}
              sx={{ mt: 3 }}
            >
              <SocialPostCard
                authorAvatar={post.author.avatar}
                authorName={post.author.name}
                comments={post.comments}
                createdAt={post.createdAt}
                isLiked={post.isLiked}
                likes={post.likes}
                media={post.media}
                message={post.message}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

SocialTimeline.propTypes = {
  // @ts-ignore
  profile: PropTypes.object.isRequired
};
