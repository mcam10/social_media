import firebase from './firebase_config';
import Firebase from 'firebase';


class Fire{
    constructor(){
        Firebase.initializeApp();
    }

    addPost = async({text, localuri}) => {
        const remoteUri = await this.uploadPhotoAsync(localuri)

        return new Promise(( res, rej) => {
            this.firestore
            .collection("posts")
             .add({ text,
                uid: this.uid,
                timestamp: this.timestamp,
                image: remoteUri
            })
            .then(ref => {
                res(ref);
            })
            .catch(error => {
                rej(error)
            })
        })
    }

    uploadPhotoAsync = async url => {
        const path = `photos/${this.uid}/${Date.now()}.jpg`

        return new Promise(async (res, rej) => {
            const response = await fetch(url)
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(path)
                .put(file);

            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err)
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            )
        })
    }

    get firestore(){

    }

    get uid(){

    }
    get timestamp(){
        return Date.now()
    }

}