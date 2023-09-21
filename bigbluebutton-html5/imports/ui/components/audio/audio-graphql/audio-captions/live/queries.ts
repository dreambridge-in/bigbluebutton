import { gql } from '@apollo/client';

export interface GetAudioCaptions {
  audio_caption: Array<{
    user: {
      avatar: string;
      color: string;
      isModerator: boolean;
      name: string;
    };
    transcript: string;
    transcriptId: string;
  }>;
}

export const GET_AUDIO_CAPTIONS = gql`
  subscription MySubscription ($time: Date!){
    audio_caption(where: {createdAt: {_lte: $time}}, order_by: {createdAt: desc}, limit: 10) {
      user {
        avatar
        color
        isModerator
        name
      }
      transcript
      transcriptId
      createdAt
    }
  }
`;

export default {
  GET_AUDIO_CAPTIONS,
};
