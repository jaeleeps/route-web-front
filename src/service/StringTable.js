import { EnglishStringTable } from "./EnglishStringTable";
import { KoreanStringTable } from "./KoreanStringTable";

export const StringTable = localStorage.getItem('selected_language') === "korean"
  ? KoreanStringTable
  : EnglishStringTable;