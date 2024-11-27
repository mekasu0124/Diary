from fastapi import FastAPI

from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware


cors_middleware = [
    Middleware(
        CORSMiddleware,
        allow_credentials=True,
        allow_headers=["*"],
        allow_methods=["*"],
        allow_origins=['http://localhost:3000', 'http://localhost:3001'],
    )
]


app = FastAPI(middleware = cors_middleware)


@app.get("/")
async def read_root():
    return { "message": "Hello World from Diary's Serveeeer!" }

def print_greeting():
    with open("./server_info.json", 'r', encoding="utf-8-sig") as f:
        data = json.load(f)

        print("~"*30)
        print("~"*30)
        print(f"Welcome To {data["server_info"]["app_name"]}'s Server!")

        for info in data["server_info"]:
            if info == "app_name":
                continue

            title = info
            text = data["server_info"][title]

            print("~"*30)
            print(f"| {title}: {text}")

        print("~"*30)
        print("~"*30)


if __name__ == '__main__':
    from dotenv import load_dotenv

    import os
    import json
    import uvicorn

    load_dotenv()

    port = int(os.getenv("PORT"))
    host = os.getenv("HOST")

    print_greeting()

    uvicorn.run(app=app, host=host, port=port)
