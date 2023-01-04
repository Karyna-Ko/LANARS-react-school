import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import NoPhotos from './NoPhotos';
import { useAppSelector } from 'shared/hooks';

export const AllPhotos: React.FC = () => {
  const photos = useAppSelector((photo) => photo.photos.photos);
  return (
    photos.length > 0 ?
      <ImageList cols={6} rowHeight={142} gap={8} sx={{ width: 895 }}>
        {photos.map((photo) => (
          <ImageListItem
            key={photo.id}
            sx={{
              height: 'auto',
              // eslint-disable-next-line @typescript-eslint/naming-convention
              '& .MuiImageListItem-img': {
                width: 142,
                borderRadius: 8,
              }}}
          >
            <img
              src={`${photo.image}?w=248&fit=crop&auto=format`}
              srcSet={`${photo.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={photo.description}
              loading="lazy"/>
          </ImageListItem>
        ))}
      </ImageList> : <NoPhotos />
  );
};
