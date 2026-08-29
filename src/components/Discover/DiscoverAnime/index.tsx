import Header from '@app/components/Common/Header';
import PageTitle from '@app/components/Common/PageTitle';
import MediaSlider from '@app/components/MediaSlider';
import defineMessages from '@app/utils/defineMessages';
import { ANIME_KEYWORD_ID } from '@server/api/themoviedb/constants';
import { useIntl } from 'react-intl';

const messages = defineMessages('components.Discover.DiscoverAnime', {
  anime: 'Anime',
  description: 'Discover anime series and movies in one place.',
  popularSeries: 'Popular Anime Series',
  popularMovies: 'Popular Anime Movies',
  upcomingSeries: 'Upcoming Anime Series',
  upcomingMovies: 'Upcoming Anime Movies',
});

const DiscoverAnime = () => {
  const intl = useIntl();
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const upcomingDate = new Date(now.getTime() - offset * 60 * 1000)
    .toISOString()
    .split('T')[0];

  return (
    <>
      <PageTitle title={intl.formatMessage(messages.anime)} />
      <div className="mb-6">
        <Header>{intl.formatMessage(messages.anime)}</Header>
        <p className="description">
          {intl.formatMessage(messages.description)}
        </p>
      </div>
      <MediaSlider
        sliderKey="popular-anime-series"
        title={intl.formatMessage(messages.popularSeries)}
        url="/api/v1/discover/tv"
        extraParams={`keywords=${ANIME_KEYWORD_ID}`}
        linkUrl="/discover/anime/series"
      />
      <MediaSlider
        sliderKey="popular-anime-movies"
        title={intl.formatMessage(messages.popularMovies)}
        url="/api/v1/discover/movies"
        extraParams={`keywords=${ANIME_KEYWORD_ID}`}
        linkUrl="/discover/anime/movies"
      />
      <MediaSlider
        sliderKey="upcoming-anime-series"
        title={intl.formatMessage(messages.upcomingSeries)}
        url="/api/v1/discover/tv"
        extraParams={`keywords=${ANIME_KEYWORD_ID}&firstAirDateGte=${upcomingDate}`}
        linkUrl={`/discover/anime/series?firstAirDateGte=${upcomingDate}`}
      />
      <MediaSlider
        sliderKey="upcoming-anime-movies"
        title={intl.formatMessage(messages.upcomingMovies)}
        url="/api/v1/discover/movies"
        extraParams={`keywords=${ANIME_KEYWORD_ID}&primaryReleaseDateGte=${upcomingDate}`}
        linkUrl={`/discover/anime/movies?primaryReleaseDateGte=${upcomingDate}`}
      />
    </>
  );
};

export default DiscoverAnime;
