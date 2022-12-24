# FastAPI and React Exampel

FastAPIとReactで作られたサンプルページです。
ローカルに保存されたJSONデータを渡し、Webページにて表示します。

```
.
├── README.md
├── api                             # FastAPIで作られたWebAPI
│   ├── README.md
│   ├── api
│   ├── poetry.lock
│   ├── poetry.toml
│   ├── pokemon.json
│   ├── pyproject.toml
│   └── tests
├── doc
│   └── start.md
└── sample-spa                      # reactで作られたサンプルページ
    ├── README.md
    ├── build
    ├── node_modules
    ├── package.json
    ├── public
    ├── src
    ├── tsconfig.eslint.json
    ├── tsconfig.json
    └── yarn.lock
```

## 開発

Dev Continer　もしくは　Github codespacesを使用し、開発環境を構築します。

**実行コマンド**

ターミナル1
```
cd api
git clone https://github.com/fanzeyi/pokemon.json.git
python uvicorn api.main:app --host 0.0.0.0
```

ターミナル2
```
cd sample-spa
yarn start
```

デバック機能から実行するとデバックが可能です。
