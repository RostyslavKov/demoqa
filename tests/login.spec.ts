import { test } from '../src/fixtures/base_fixture';
import { creds, loginURL } from '../test-data/login';

test.describe(async () => {

    test('login', async ({ login, profile, bookStore, JSBook }) => {
        await login.navigateTo(loginURL);
        await login.login(creds);
        await profile.btnGoToBookStore.click();
        await bookStore.book.click();
        await JSBook.addBookToCollection();
        await login.navigateTo('/profile');
        await profile.findbook();
    }); 

})
