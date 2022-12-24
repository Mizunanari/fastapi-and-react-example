import json
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# 開発のため、corsを解除する
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/images", app=StaticFiles(directory="api/pokemon.json/images"))
app.mount("/sprites", app=StaticFiles(directory="api/pokemon.json/sprites"))
app.mount("/thumbnails", app=StaticFiles(directory="api/pokemon.json/thumbnails"))

POKEMON_PATH = Path("./api/pokemon.json")


@app.get("/items/all")
def get_item():
    with open(POKEMON_PATH / "items.json", "r") as f:
        return json.loads(f.read())


@app.get("/items/{item_id}")
def read_item(item_id: int):
    with open(POKEMON_PATH / "items.json", "r") as f:
        items: dict[str, Any] = json.loads(f.read())
    list_search = list(
        filter(lambda item: item["id"] == item_id, items)  # type: ignore
    )
    if list_search == []:
        raise HTTPException(status_code=404, detail="Item not found")
    return list_search[0]


@app.get("/moves/all")
def get_moves():
    with open(POKEMON_PATH / "moves.json", "r") as f:
        return json.loads(f.read())


@app.get("/moves/{item_id}")
def read_moves(item_id: int):
    with open(POKEMON_PATH / "moves.json", "r") as f:
        items: dict[str, Any] = json.loads(f.read())
    list_search = list(
        filter(lambda item: item["id"] == item_id, items)  # type: ignore
    )
    if list_search == []:
        raise HTTPException(status_code=404, detail="Moves not found")
    return list_search[0]


@app.get("/pokedex/all")
def get_pokedex():
    with open(POKEMON_PATH / "pokedex.json", "r") as f:
        return json.loads(f.read())


@app.get("/pokedex/{item_id}")
def read_pokedex(item_id: int):
    with open(POKEMON_PATH / "pokedex.json", "r") as f:
        items: dict[str, Any] = json.loads(f.read())
    list_search = list(
        filter(lambda item: item["id"] == item_id, items)  # type: ignore
    )
    if list_search == []:
        raise HTTPException(status_code=404, detail="Pokedex not found")
    return list_search[0]


@app.get("/types/all")
def get_types():
    with open(POKEMON_PATH / "types.json", "r") as f:
        return json.loads(f.read())
