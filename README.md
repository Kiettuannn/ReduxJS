# Khái niệm Redux
- Là 1 thư viện viết bằng JS
- Redux dùng để quản lý state của toàn bộ ứng dụng, kiểu giống như biến toàn cục, được sử dụng nhiều nơi

# Khi nào cần sử dụng?
- Khi ta truyền data từ các component này sang các component khác
# Nếu không sử dụng Redux thì sao ?
- Không sử dụng thì vẫn được, nhưng quá trình truyền dữ liệu khá phức tạp, ví dụ:
![image](https://github.com/user-attachments/assets/699cc94c-91e0-4140-bc8c-df156f6ca865)
- Để truyền data từ E sang G thì cần phải thông qua App rồi mới tới được G
# Nếu sử dụng Redux
![image](https://github.com/user-attachments/assets/588bc200-0900-454c-a62a-baff2128d9c2)
- Thì data của các component sẽ được lưu vào store, khi cần chỉ cần lấy từ store ra thôi

## Cách cài đặt
Sử dụng câu lệnh: npm install redux react-redux

## Cách hoạt động của Redux
![Uploading image.png…]()
- **Store**: là một kho lưu trữ các state và phân phát các state cho các component
- **Action**: Những hành động có thể xảy ra
- **Dispatch**: Dùng để kích hoạt một action và gửi action đến reducer
- **Reducer**: Dùng để tiếp nhận các action mà dispatch gửi đến, sau đó nó sẽ xử lí các login (các case) và sẽ lưu lại kết quả vào store
- **Luồng hoạt động của Redux**: Tưởng tượng các action như là một gói hàng sẽ được dispatch(như cái xe) vận chuyển gói hàng action này tới nhà máy (reducer) , tại nhà máy này sẽ xử lí logic cho gói hàng và đồng thời sẽ lưu lại giá trị mới của state gói hàng

### `useContext`
## Các bước sử dụng:
- **Bước 1:** Cài đặt redux bằng câu lệnh npm install redux react-redux (chỉ cần cài 1 lần)
- **Bước 2:** Tạo cấu trúc thư mục (thêm folder actions, reducers)
     ![Uploading image.png…]()
- **Bước 3:** Thêm những action vào file actions/tenFile.js
- **Bước 4:** Thêm reducer vào file reducer/tenFile.js
- **Bước 5:** Tạo file reducers/index.js đê gộp tất cả reducer lại và cho vào cùng một store.
              - Sử dụng hàm combineReducer (import từ thư viện redux) để hợp nhất tất cả reducer thành 1 reducer là **allReducers**
  - **Bước 6:** Ở file index.js (file cấp cao nhất) Sử dụng hàm createStore để tạo store chứa allReducers. Tiếp theo ta gói <App/> bên trong 1 component hỗ trợ của react-redux là Provider, nhờ đó tất cả các componet trong <App /> có thể truy cập được vào store
  - **Bước 7:**
    + Sử dụng useSelector của react-redux để lấy các state từ store
    + Sử dụng useDispatch để trả về function dispatch, truyền các action vào dispatch để cập nhập lại state


Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
