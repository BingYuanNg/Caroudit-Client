import Promise from 'bluebird';
import { request } from '../utils/request';

export function getTopicList(params) {
    return new Promise((resolve, reject) => {
        const url = `/topic/`;
        request('GET', url)
            .query( params )
            .end((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.body.data);
                }
            })
    })
}

export function createTopic(data) {
    return new Promise((resolve, reject) => {
        const url = `/topic/`;
        request('POST', url)
        	.send( {'topic' : data.topic })
            .end((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.body.data);
                }
            })
    })
}

export function upvoteTopic(topic_id) {
    return new Promise((resolve, reject) => {
        const url = `/topic/${topic_id}/upvote`;
        request('POST', url)
        	.send()
            .end((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.body.data);
                }
            })
    })
}
export function downvoteTopic(topic_id) {
    return new Promise((resolve, reject) => {
        const url = `/topic/${topic_id}/downvote`;
        request('POST', url)
        	.send()
            .end((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.body.data);
                }
            })
    })
}

export function deleteTopic(id) {
    return new Promise((resolve, reject) => {
        const url = `/topic/${id}`;

        request('DELETE', url)
            .end((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.body.data);
                }
            })
    })
}

export function getTopic(id) {
    return new Promise((resolve, reject) => {
        const url = `/topic/${id}`;

        request('GET', url)
            .end((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.body.data);
                }
            })
    })
}

export function getTop() {
    return new Promise((resolve, reject) => {
        const url = `/topic/top`;

        request('GET', url)
            .end((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.body.data);
                }
            })
    })
}
