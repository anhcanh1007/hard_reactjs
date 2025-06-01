Quy ước lỗi trả về từ server
Server phải trả về một kiểu lỗi thống nhất, không thể trả về tùy tiện được
Ở đây server của mình (Json server) cấu hình để trả về 2 kiểu lỗi

1. lỗi liên quan đến việc gửi data như POST, PUT thì error là một object kiểu EntityError
   {
   "error": {
   "publishDate": "không được publish vào thời điểm trong quá khứ"
   }
   }

interface EntityError {
[key:string | number]: string | EntityError | EntitError[]
}

2. các lỗi còn lại sẽ trả về một thông báo dạng error: string
   {
   "error":"lỗi rồi bạn ơi"
   }

   Lỗi từ RTK Query
   Sẽ có 2 kiểu: FetchBaseQueryError | SerializedError

   SerializedError có dạng:
   export interface SerializedError {
   name?: string
   message?: string
   stack?: string
   code?: string
   }

   FetchBaseQueryError có dạng:
   export type FetchBaseQueryError =
   | {
   status: number
   data: unknown
   }
   | {

   status: 'FETCH_ERROR'
   data?: undefined
   error: string
   }
   | {

   status: 'PARSING\*ERROR'
   originalStatus: number
   data: string
   error: string
   }
   | {

   status: 'CUSTOM_ERROR'
   data?: unknown
   error: string
   }

KHi mà fetch api bị lỗi RTK query sẽ trả lỗi về theo dạng FetchBaseQueryError
Còn khi người dùng tự ném lỗi ra bằng throw thì RTK sẽ trả về theo kiểu SerializedError
