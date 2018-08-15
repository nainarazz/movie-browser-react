import * as actionTypes from './actionTypes';
import { tmbdAxiosInstance } from '../../axios';
import { TMBD_API_KEY } from '../../api-constants';

const setTvShow = (tvShow) => {
    return {
        type: actionTypes.SET_TV_SHOW,
        tvShow
    }
}

const setSimilarTvShow = (similarShows) => {
    return {
        type: actionTypes.SET_SIMILAR_TV_SHOW,
        similarShows
    }
}

export const fetchShowDetail = (tvShowId) => {
    return dispatch => {
        Promise.all([
            tmbdAxiosInstance.get(`tv/${tvShowId}?api_key=${TMBD_API_KEY}&language=en-US`),
            tmbdAxiosInstance.get(`tv/${tvShowId}/similar?api_key=${TMBD_API_KEY}&language=en-US`)
        ]).then(response => {
            const tmbdResults = response[0].data;
            const similarShowsResult = response[1].data.results;
            const topSimilarShows = similarShowsResult.slice(0, 10);
            console.log("similar shows ", topSimilarShows);
            dispatch(setTvShow(tmbdResults));
            dispatch(setSimilarTvShow(topSimilarShows));
        }).catch(error => {
                console.log(error);
            });
    };
}