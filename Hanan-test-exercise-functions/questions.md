/**
 * test-exercise-functions.js
 *
 * המטרה: לתת לסטודנטים פונקציות מוכנות, וליד כל פונקציה רשימת בדיקות מומלצות.
 * (תכתוב/י את הטסטים בקובץ נפרד עם node:test)
 */

/* =========================
   1) sum
   ========================= */
export function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a + b;
}
/**
 * בדיקות שצריך לבצע:
 * - מחזיר 7 עבור sum(2, 5)
 * - תומך במספרים שליליים: sum(-1, -2) -> -3
 * - זורק TypeError אם אחד הפרמטרים לא מספר (למשל sum('1', 1), sum(1, '1'), sum('1','1'))
 */

/* =========================
   2) grade
   ========================= */
export function grade(score) {
  if (typeof score !== 'number' || score < 0 || score > 100) {
    throw new RangeError('Invalid score');
  }

  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  return 'F';
}
/**
 * בדיקות שצריך לבצע:
 * - 100 -> 'A', 90 -> 'A', 89 -> 'B'
 * - 80 -> 'B', 79 -> 'C'
 * - 70 -> 'C', 69 -> 'F', 0 -> 'F'
 * - זורק RangeError עבור score < 0 (למשל -1)
 * - זורק RangeError עבור score > 100 (למשל 101)
 * - זורק RangeError עבור טיפוס לא מספר (למשל '56')
 */

/* =========================
   3) totalPrice
   ========================= */
export function totalPrice(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('Items must be an array');
  }

  return items.reduce((sum, item) => {
    if (!item || typeof item.price !== 'number' || typeof item.qty !== 'number') {
      throw new TypeError('Invalid item');
    }
    return sum + item.price * item.qty;
  }, 0);
}
/**
 * בדיקות שצריך לבצע:
 * - קלט תקין:
 *   totalPrice([{ price: 12, qty: 1 }, { price: 12, qty: 2 }]) -> 36
 * - מערך ריק -> 0
 * - זורק TypeError אם items לא מערך (למשל totalPrice('2'))
 * - זורק TypeError אם חסר qty / price בפריט (למשל [{price: 2}] או [{qty: 2}])
 * - זורק TypeError אם price/qty אינם מספרים (למשל qty: '2')
 */

/* =========================
   4) delay (async)
   ========================= */
export function delay(ms) {
  if (typeof ms !== 'number' || ms < 0) {
    return Promise.reject(new RangeError('Invalid delay'));
  }

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
/**
 * בדיקות שצריך לבצע (שימו לב: async tests):
 * - לא נזרק/נדחה עבור delay(0): להשתמש ב-assert.doesNotReject עם await
 * - נדחה עבור delay('d') או delay(-1): להשתמש ב-assert.rejects עם await
 * - מומלץ לבדוק סוג שגיאה: RangeError
 */

/* =========================
   5) getUserName (async + dependency)
   ========================= */
export async function getUserName(userId, userRepo) {
  if (!userRepo || typeof userRepo.findById !== 'function') {
    throw new TypeError('Invalid user repository');
  }

  const user = await userRepo.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  return user.name;
}
/**
 * בדיקות שצריך לבצע:
 * - מחזיר שם משתמש כאשר findById מחזיר { name: 'Hanan' }
 * - נדחה (reject) כאשר findById מחזיר null -> Error עם message "User not found"
 * - נדחה (reject) כאשר userRepo לא תקין (למשל מחרוזת) -> TypeError
 * - רצוי להשתמש ב-fakeRepo:
 *   const fakeRepo = { findById: async (id) => id === 1 ? ({name:'Hanan'}) : null }
 * - לשים לב: להשתמש ב-assert.rejects + await
 */

/* =========================
   6) withdraw
   ========================= */
export function withdraw(balance, amount) {
  if (typeof balance !== 'number' || typeof amount !== 'number') {
    throw new TypeError('Invalid input');
  }

  if (amount > balance) {
    throw new Error('Insufficient funds');
  }

  return balance - amount;
}
/**
 * בדיקות שצריך לבצע:
 * - withdraw(20, 10) -> 10
 * - זורק TypeError אם balance או amount לא מספרים
 * - זורק Error עם message "Insufficient funds" כאשר amount > balance (למשל withdraw(10,11))
 *   מומלץ לבדוק message עם Regex: /Insufficient funds/
 */
