# GitBattle Leaderboard 🏆

## Overview
The GitBattle Leaderboard showcases the top GitHub developers based on their battle performance. Users are ranked by their total score accumulated through winning battles.

## Features

### 🎨 Modern UI Design
- **Animated Gradients**: Dynamic background with pulsing gradient orbs
- **Glassmorphism**: Premium glass-effect cards with backdrop blur
- **Smooth Animations**: Framer Motion animations for smooth transitions
- **Responsive Design**: Fully responsive layout for all screen sizes
- **Medal System**: Gold, silver, bronze medals for top 3 positions

### 📊 Stats Display
- Total number of competitors
- Total battles fought
- Top score achieved
- Individual battle wins per user

### 🏅 Ranking System
- **Top 3 Special Treatment**: 
  - Gold medal (1st place)
  - Silver medal (2nd place)
  - Bronze medal (3rd place)
- **Rank Badges**: Color-coded badges for all positions
- **Avatar Display**: GitHub profile pictures with special indicators for top performers
- **Score Display**: Large, gradient-styled score numbers
- **GitHub Links**: Direct links to user profiles

## How It Works

1. **Battle Execution**: When two users battle, the winner's data is saved/updated
2. **Score Calculation**: Scores are based on:
   - GitHub stars × 10
   - Followers × 5
   - Public repos × 2
3. **Leaderboard Update**: Winners are automatically added or updated in the database
4. **Display**: Top 50 users are shown, sorted by score

## API Endpoints

### GET `/api/leaderboard`
Fetches the top 50 users from the leaderboard.

**Response:**
```json
[
  {
    "_id": "...",
    "username": "example",
    "avatar": "https://...",
    "score": 125000,
    "battlesWon": 45,
    "createdAt": "...",
    "updatedAt": "..."
  }
]
```

## Database Schema

```typescript
interface ILeaderboard {
  username: string;      // Unique GitHub username
  avatar: string;        // GitHub avatar URL
  score: number;         // Total score from latest battle
  battlesWon: number;    // Number of battles won
  createdAt: Date;       // Auto-generated
  updatedAt: Date;       // Auto-generated
}
```

## Usage

### Viewing the Leaderboard
Navigate to `/leaderboard` to view the global rankings.

### Getting on the Leaderboard
1. Start a battle on the homepage
2. Win the battle
3. Your score will be automatically saved (requires authentication)
4. Check the leaderboard to see your ranking

## Customization

### Changing Display Limit
Edit `lib/actions.ts`:
```typescript
return await Leaderboard.find().sort({ score: -1 }).limit(50).lean();
```

### Modifying Medal Colors
Edit `app/leaderboard/page.tsx` in the `getMedalColor` function:
```typescript
const getMedalColor = (rank: number) => {
  switch (rank) {
    case 1: return "from-yellow-400 to-orange-500";
    case 2: return "from-gray-300 to-gray-500";
    case 3: return "from-orange-400 to-orange-600";
    default: return "from-blue-500 to-purple-500";
  }
};
```

## Future Enhancements

- [ ] Filtering by time period (weekly, monthly, all-time)
- [ ] Search functionality to find specific users
- [ ] Pagination for large leaderboards
- [ ] User profile pages with detailed stats
- [ ] Battle history timeline
- [ ] Achievement badges system
- [ ] Social sharing of rankings

## Testing

To populate the leaderboard with test data, you can use real GitHub battles or refer to `lib/mockLeaderboard.ts` for sample data structure.

## Performance

- Data is fetched client-side on page load
- Results are cached by the browser
- Database queries are optimized with indexes
- Limit set to 50 to balance performance and display
