CreateSlice là cú pháp rút gọn nó tích hợp createAction và createReducer
Nó là một hàm nhận vào một object

- key đầu tiên là name: "string => đây là prefix action
- key thứ hai initialState
- key thứ ba là reducer, có giá trị là một object, trong object đó nhận vào các cặp key: value đại diện cho tên action và giá trị là logic xử lí object
- key thứ tư là extraReducer có giá trị là builder callback giống với createReducer
