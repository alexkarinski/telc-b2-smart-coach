import { Exercise } from "./types";
import { EXERCISES_TEIL_1 } from "./exercises_teil1";
import { EXERCISES_TEIL_2 } from "./exercises_teil2";
import { EXERCISES_TEIL_2_TEXT_2 } from "./exercises_teil2_2";
import { EXERCISES_TEIL_3 } from "./exercises_teil3";
import { EXERCISES_TEIL_4 } from "./exercises_teil4";
import { EXERCISES_SCHREIBEN } from "./exercises_schreiben";
import { EXERCISES_SCHREIBEN_TEIL_BESCHWERDE } from "./exercises_schreiben_teil_beschwerde";
import { EXERCISES_SPRACHBAUSTEINE } from "./exercises_sprachbausteine";
import { EXERCISES_HOEREN_TEIL_1 } from "./exercises_hoeren_teil1";
import { EXERCISES_HOEREN_TEIL_2 } from "./exercises_hoeren_teil2";
import { EXERCISES_HOEREN_TEIL_3 } from "./exercises_hoeren_teil3";
import { EXERCISES_HOEREN_TEIL_4 } from "./exercises_hoeren_teil4";
import { EXERCISES_TELEFONNOTIZ } from "./exercises_telefonnotiz";

// Aggregate all exercises here
export const MOCK_EXERCISES: Exercise[] = [
  ...EXERCISES_TEIL_1,
  ...EXERCISES_TEIL_2,
  ...EXERCISES_TEIL_2_TEXT_2,
  ...EXERCISES_TEIL_3,
  ...EXERCISES_TEIL_4,
  ...EXERCISES_SCHREIBEN,
  ...EXERCISES_SCHREIBEN_TEIL_BESCHWERDE,
  ...EXERCISES_SPRACHBAUSTEINE,
  ...EXERCISES_HOEREN_TEIL_1,
  ...EXERCISES_HOEREN_TEIL_2,
  ...EXERCISES_HOEREN_TEIL_3,
  ...EXERCISES_HOEREN_TEIL_4,
  ...EXERCISES_TELEFONNOTIZ
];