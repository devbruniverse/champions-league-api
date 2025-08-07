# Champions League API ⚽

A RESTful API built with **Node.js** and **Express** to manage Champions League player data. This API allows you to list, add, update, and delete players, as well as retrieve a list of football clubs.

---

## 📦 Features

- List all players
- Add a new player
- Retrieve a specific player by ID
- Update player information
- Delete a player

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **RESTful API design**

---

## 📌 Base URL

All endpoints are prefixed with:

`/api`

---

## 📚 API Endpoints

### ▶️ Players

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| GET    | `/api/players`      | Get all players         |
| POST   | `/api/players`      | Add a new player        |
| GET    | `/api/players/:id`  | Get player by ID        |
| PATCH  | `/api/players/:id`  | Update player by ID     |
| DELETE | `/api/players/:id`  | Delete player by ID     |

### ▶️ Clubs

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | `/api/clubs`   | Get list of all clubs |

---

## 🧪 Example Request & Response

### GET `/api/players`

**Response:**

```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Paris Saint-Germain",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 85,
      "Shooting": 94,
      "Passing": 91,
      "Dribbling": 95,
      "Defending": 38,
      "Physical": 65,
    },
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Manchester United",
    "nationality": "Portugal",
    "position": "Forward",
    "statistics": {
      "Overall": 92,
      "Pace": 89,
      "Shooting": 93,
      "Passing": 82,
      "Dribbling": 88,
      "Defending": 35,
      "Physical": 78,
    "},
  },
]
