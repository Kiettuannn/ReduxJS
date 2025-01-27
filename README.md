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
![image](https://github.com/user-attachments/assets/6e8c2c5e-048d-48af-9a85-93ad880eefd3)
- Thì data của các component sẽ được lưu vào store, khi cần chỉ cần lấy từ store ra thôi

## Cách cài đặt
**Sử dụng câu lệnh: npm install redux react-redux**

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
     ![image](https://github.com/user-attachments/assets/ef1e0d9b-0c5e-4348-aae3-8d32e2ea0acb)
- **Bước 3:** Thêm những action vào file actions/tenFile.js
- **Bước 4:** Thêm reducer vào file reducer/tenFile.js
- **Bước 5:** Tạo file reducers/index.js đê gộp tất cả reducer lại và cho vào cùng một store.
              - Sử dụng hàm combineReducer (import từ thư viện redux) để hợp nhất tất cả reducer thành 1 reducer là **allReducers**
- **Bước 6:** Ở file index.js (file cấp cao nhất) Sử dụng hàm createStore để tạo store chứa allReducers. Tiếp theo ta gói <App/> bên trong 1 component hỗ trợ của react-redux là Provider, nhờ đó tất cả các componet trong <App /> có thể truy cập được vào store
- **Bước 7:**
    + Sử dụng useSelector của react-redux để lấy các state từ store
    + Sử dụng useDispatch để trả về function dispatch, truyền các action vào dispatch để cập nhập lại state

### `Ví dụ mẫu`
## Counter
**Bước 1:** Cài đặt bằng câu lệnh: npm install redux react-redux
**Bước 2:** Tạo cấu trúc thư mục
![image](https://github.com/user-attachments/assets/eed0f804-8c3b-452f-8b64-a60e072dc923)
**Bước 3:** Thêm các action vào file action
![image](https://github.com/user-attachments/assets/833c9cc9-097c-4237-a99a-933cc5d64416)
**Bước 4:** Thêm reducer vào file reducer, file này sẽ xử lý logic cho các case
![image](https://github.com/user-attachments/assets/1cc3ae2b-c205-4658-aa41-bf0ec76bad88)
**Bước 5:** Tạo file index.js trong folder reducer để chứa allReducer
![image](https://github.com/user-attachments/assets/0e6093f7-b78c-408b-9daf-a4734734bbed)
**Bước 6:** Đăng ký ở file index.js của dự án
![Uploading image.png…]()
**Bước 7:** Các thao tác để lấy data từ component
     + Sử dụng useSelector để lấy các state từ store
     + Sử dụng useDispatch để trả về function dispatch, truyền các action vào dispatch để cập nhập lại state
![Uploading image.png…]()

          




