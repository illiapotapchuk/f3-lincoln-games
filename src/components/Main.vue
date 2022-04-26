<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-1">
        <p class="font-weight-bold mb-10 text-h4">
          F3 Naperville Lincoln Games 2022 Points Calculator
        </p>
        <p class="font-weight-bold text-h5">Total Points: {{ totalPoints }}</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <v-row class="text-center">
          <v-col class="mb-4">
            <p class="font-weight-bold text-h5 mb-3">Workouts</p>
          </v-col>
        </v-row>
        <!-- <v-subheader class="pl-0">
          How many workouts did you attend?
        </v-subheader>
        <v-slider v-model="workoutCount" min="0" max="7" thumb-label></v-slider> -->
        <v-text-field
          v-model="workoutCount"
          @change="calc"
          type="number"
          label="How many workouts did you attend?"
          :max="7"
        ></v-text-field>
        <!-- <v-select
          v-model="saturdayDoubleTap"
          @change="calc"
          :items="yesNoItems"
          label="Did you double tap on Saturday?"
        ></v-select> -->
        <v-select
          v-model="q"
          @change="calc"
          :items="yesNoItems"
          label="Did you Q this week?"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <v-row class="text-center">
          <v-col class="mb-4">
            <p class="font-weight-bold text-h5 mb-3">Daily 3</p>
          </v-col>
        </v-row>
        <v-text-field
          v-model="dailyRunCount"
          @change="calc"
          type="number"
          label="How many days you ran 5 miles?"
        ></v-text-field>
        <v-text-field
          v-model="dailyRuckCount"
          @change="calc"
          type="number"
          label="How many days you rucked 3 miles?"
        ></v-text-field>
        <v-text-field
          v-model="dailyBikeCount"
          @change="calc"
          type="number"
          label="How many days you biked 15 miles?"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <v-row class="text-center">
          <v-col class="mb-4">
            <p class="font-weight-bold text-h5 mb-3">EC Events</p>
          </v-col>
        </v-row>
        <v-select
          v-model="charity"
          @change="calc"
          :items="yesNoItems"
          label="Did you donate $25 to your favorite charity?"
        ></v-select>
        <v-select
          v-model="teamDinner"
          @change="calc"
          :items="yesNoItems"
          label="Did you have a team dinner?"
        ></v-select>
        <v-select
          v-model="volunteer"
          @change="calc"
          :items="yesNoItems"
          label="Did you volunteer at Feed My Starving Children?"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <v-row class="text-center">
          <v-col class="mb-4">
            <p class="font-weight-bold text-h5 mb-3">
              Power Bonus Point Opportunities
            </p>
          </v-col>
        </v-row>
        <v-select
          v-model="powerRun"
          @change="calc"
          :items="numberItems"
          label="Power Run - How many miles did you run at your power run?"
        ></v-select>
        <v-select
          v-model="powerRuck"
          @change="calc"
          :items="numberItems"
          label="Power Ruck - How many miles did you ruck at your power ruck?"
        ></v-select>
        <v-select
          v-model="powerBike"
          @change="calc"
          :items="bikeNumerItems"
          label="Power Bike - How many miles did you bike at your power bike?"
        ></v-select>
        <v-text-field
          v-model="AOCount"
          @change="calc"
          type="number"
          label="Around the World - How many AO's did you hit this week?"
          max="8"
        ></v-text-field>
        <v-select
          v-model="sixPack"
          @change="calc"
          :items="yesNoItems"
          label="Iron Horse - Did you have a six pack this week?"
        ></v-select>
        <v-select
          v-model="bigBoy"
          @change="calc"
          :items="yesNoItems"
          label="Get Swole! - Did you complete 5 or more workouts with a BigBoy Coupon?"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <v-row class="text-center">
          <v-col class="mb-4">
            <p class="font-weight-bold text-h5 mb-3">POP-UPS</p>
          </v-col>
        </v-row>
        <v-text-field
          v-model="popUpPoints"
          @change="calc"
          type="number"
          label="How many additional pop-up points did you earn?"
        ></v-text-field>
      </v-col>
      <p class="font-weight-bold text-h5">Total Points: {{ totalPoints }}</p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MainComponent",

  data: () => ({
    totalPoints: 0,
    workoutCount: null,
    saturdayDoubleTap: null,
    q: null,
    dailyRunCount: null,
    dailyRuckCount: null,
    dailyBikeCount: null,
    charity: null,
    teamDinner: null,
    volunteer: null,
    powerRun: null,
    powerRuck: null,
    powerBike: null,
    AOCount: null,
    sixPack: null,
    bigBoy: null,
    popUpPoints: null,
    yesNoItems: ["Yes", "No"],
    numberItems: [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    bikeNumerItems: [0, 30, 50],
  }),
  methods: {
    calc() {
      this.workoutCount = this.forceRange(this.workoutCount, 0, 7);
      this.dailyRunCount = this.forceRange(this.dailyRunCount, 0, 6);
      this.dailyRuckCount = this.forceRange(this.dailyRuckCount, 0, 6);
      this.dailyBikeCount = this.forceRange(this.dailyBikeCount, 0, 6);
      this.AOCount = this.forceRange(this.AOCount, 0, 7);
      this.popUpPoints = this.forceRange(this.popUpPoints, 0, 1000);

      this.totalPoints = 0;

      this.totalPoints += this.workoutCount * 5;
      // this.totalPoints += this.toBool(this.saturdayDoubleTap) ? 5 : 0;
      this.totalPoints += this.toBool(this.q) ? 5 : 0;

      this.totalPoints += this.dailyRunCount * 3;
      this.totalPoints += this.dailyRuckCount * 3;
      this.totalPoints += this.dailyBikeCount * 3;

      this.totalPoints += this.toBool(this.charity) ? 10 : 0;
      this.totalPoints += this.toBool(this.teamDinner) ? 25 : 0;
      this.totalPoints += this.toBool(this.volunteer) ? 10 : 0;

      this.totalPoints += this.powerRun;
      this.totalPoints += this.powerRuck;
      if (this.powerBike == 50) {
        this.totalPoints += 20;
      } else if (this.powerBike == 30) {
        this.totalPoints += 10;
      }
      this.totalPoints += this.AOCount > 4 ? 10 : 0;
      this.totalPoints += this.toBool(this.sixPack) ? 10 : 0;
      this.totalPoints += this.toBool(this.bigBoy) ? 10 : 0;
      this.totalPoints += this.popUpPoints;
    },
    toBool(v) {
      return v && v == "Yes";
    },
    forceRange(v, min, max) {
      if (!v) return v;

      if (v > max) {
        return max;
      } else if (v < min) {
        return min;
      } else {
        return parseInt(v);
      }
    },
  },
};
</script>
