import {test as base} from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import { creds, loginURL } from '../../test-data/login';
import { BookStorePage } from '../../pages/BookStorePage';
import { SpeakingJavaScriptBookStorePage } from '../../pages/SpeakingJavaScriptBookPage';
import { ProfilePage } from '../../pages/ProfilePage';
type MyFixture = {
    categoriesName:string[]
    login: LoginPage
    bookStore: BookStorePage;
    JSBook: SpeakingJavaScriptBookStorePage;
    profile: ProfilePage; 
}

const test = base.extend<MyFixture>({
    categoriesName: [
        'Elements', 
        'Forms',
        'Alerts,Frame & Windows',
        'Widgets', 
        'Interactions',
        'Book Store Application'
    ],
    login:async ({page}, use) => {
        const loginP = new LoginPage(page); 
        await use(loginP)
        
    },
    bookStore:async ({page}, use) => {
        const bookStoreP = new BookStorePage(page); 
        await use(bookStoreP)
        
    },
    JSBook:async ({page}, use) => {
        const JSBookP = new SpeakingJavaScriptBookStorePage(page); 
        await use(JSBookP)
        
    },
    profile:async ({page}, use) => {
        const profileP = new ProfilePage(page); 
        await use(profileP)
        
    }
    // userApiRequest:async ({}, use) => {
    //     const newCt = new request.context{
    //         storageState:  storageStatePath,
    //     }; 
    //     await use(newCt)
    // }
})

export{test};