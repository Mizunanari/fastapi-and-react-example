# FastAPI and React Exampel

FastAPIとReactで作られたサンプルページです。
ローカルに保存されたJSONデータを渡し、Webページにて表示します。

ポケモン情報の取得先: https://github.com/fanzeyi/pokemon.json.git

```
.
├── README.md
├── api                             # FastAPIで作られたWebAPI
│   ├── README.md
│   ├── api                         # pythonプログラム
│   ├── poetry.lock
│   ├── pokemon.json
│   ├── pyproject.toml
│   └── tests
└── sample-spa                      # reactで作られたサンプルページ
    ├── README.md
    ├── package.json
    ├── public
    ├── src                         # typescriptプログラム
    ├── tsconfig.eslint.json
    ├── tsconfig.json
    └── yarn.lock
```

## 開発

リポジトリのクローン(api/pokemon.jsonを含む)
```bash
git clone --recursive https://github.com/Mizunanari/fastapi-and-react-example.git
```

Dev Continer　もしくは　Github codespacesを使用し、開発環境を構築します。

**実行コマンド**

ターミナル1
```
uvicorn api.main:app --host 0.0.0.0
```

ターミナル2
```
cd sample-spa
yarn start
```

デバック機能から実行するとデバックが可能です。
