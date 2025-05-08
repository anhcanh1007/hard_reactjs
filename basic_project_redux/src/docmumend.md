Redux

- Luồng hoạt động của Redux

* Khi người dùng thực thi một hành động (hay gọi là dispatch một action)
* store sẽ nhận action đó và chuyển về cho reducer để xử lí state theo action nhận được và trả về state mới cho store
* store trả về cho UI

=> Nói cách khác:

- Store là trung tâm điều phối, không tự xử lí action mà gọi reducer để xử lý
- Reducer có nhiệm vụ tính toán state
- Component chỉ nhận state hoặc dispatch, không liên quan việc xử lí state
