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
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              You may score 5 pts for attending a workout from 5:15-6 (M-F). You
              may score an additional 5 pts if you double tap on a Saturday.
              During this week of Lincoln Games, we will NOT offer our Late
              Start or Black Diamond options for this week only to streamline
              the Daily 3 below and bring our region closer together for the
              week.
            </v-tooltip>
          </template>
        </v-text-field>
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
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              You may score an additional 5 pts for Qing a workout (one time
              only).
            </v-tooltip>
          </template>
        </v-select>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <v-row class="text-center">
          <v-col class="mb-4">
            <p class="font-weight-bold text-h5 mb-3">
              <v-tooltip bottom max-width="500">
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                </template>
                A PAX may score 14 pts daily for his team. (Saturday a PAX may
                score 19 pts) However, a PAX may score 19 pts one time during
                the week if he Q’s a WO in addition to the ruck/run/bike
                (Saturday 24 pts). The Daily 3 and Power events must be done in
                one attempt, one shot. In other words, there is NO SPLITTING UP
                distance. I.E. If you’re planning to bike 15 miles, you can NOT
                do 10 miles in the morning, 5 in the afternoon. It must be done
                in one attempt, one shot.
              </v-tooltip>
              Daily 3
            </p>
          </v-col>
        </v-row>
        <v-text-field
          v-model="dailyRunCount"
          @change="calc"
          type="number"
          label="How many days you ran 5 miles?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              You may score 3 pts for Running 5 miles (You must have a picture
              of the distance you traveled via the exercise tracker of your
              choice [strava,map my run, etc]).
            </v-tooltip>
          </template>
        </v-text-field>
        <v-text-field
          v-model="dailyRuckCount"
          @change="calc"
          type="number"
          label="How many days you rucked 3 miles?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              You may score 3 pts for Rucking 3 miles (You must have a picture
              of the distance you traveled via the exercise tracker of your
              choice [strava,map my run, etc]).
            </v-tooltip>
          </template>
        </v-text-field>
        <v-text-field
          v-model="dailyBikeCount"
          @change="calc"
          type="number"
          label="How many days you biked 15 miles?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              You may score 3 pts for Biking 15 miles (You must have a picture
              of the distance you traveled via the exercise tracker of your
              choice [strava,map my run, etc]).
            </v-tooltip>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <v-row class="text-center">
          <v-col class="mb-4">
            <p class="font-weight-bold text-h5 mb-3">
              <v-tooltip bottom max-width="500">
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                </template>
                You have three opportunities to earn EC points. You may complete
                each event one time throughout the week for points.
              </v-tooltip>
              EC Events
            </p>
          </v-col>
        </v-row>
        <v-select
          v-model="charity"
          @change="calc"
          :items="yesNoItems"
          label="Did you donate $25 to your favorite charity?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              10 pt bonus Per PAX for donating a minimum of $25 to your favorite
              charity, suggested donation to: F3’s Naperville Foundation, West
              Suburban Pantry, Loaves and Fishes, Love by Design, Hesed House,
              People’s Resource Center (receipt proof needed).
            </v-tooltip>
          </template>
        </v-select>
        <v-select
          v-model="teamDinner"
          @change="calc"
          :items="yesNoItems"
          label="Did you have a team dinner (counts only onece per team)?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              25 pt team bonus for 50% attendance for a team dinner at a non
              chain restaurant or at a fellow teammate's residence (team picture
              as proof).
            </v-tooltip>
          </template>
        </v-select>
        <v-select
          v-model="volunteer"
          @change="calc"
          :items="yesNoItems"
          label="Did you volunteer at Feed My Starving Children?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              10 pt bonus per PAX for signing up and attending a Feed My
              Starving Children (FMSC) volunteer opportunity. *Toady has
              reserved June 7th as a mass block of time for FMSC shall this work
              best for you or pick a different date. (proof of registration
              required)
            </v-tooltip>
          </template>
        </v-select>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <v-row class="text-center">
          <v-col class="mb-4">
            <p class="font-weight-bold text-h5 mb-3">
              <v-tooltip bottom max-width="500">
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                </template>
                The Daily 3 and Power events must be done in one attempt, one
                shot. In other words, there is NO SPLITTING UP distance. I.E. If
                you’re planning to bike 15 miles, you can NOT do 10 miles in the
                morning, 5 in the afternoon. It must be done in one attempt, one
                shot.
              </v-tooltip>
              Power Bonus Point Opportunities
            </p>
          </v-col>
        </v-row>
        <v-select
          v-model="powerRun"
          @change="calc"
          :items="numberItems"
          label="Power Run - How many miles did you run at your power run?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              Power Run-10 pts awarded once per PAX if they complete a 10 mile
              run, or up to 20 points if you complete a 20 mile run. For every
              mile you run between 10-20 miles you earn an extra point, again, a
              maximum of 20 points. (You must have a picture of the distance you
              traveled via the exercise tracker of your choice [strava,map my
              run, etc]). required)
            </v-tooltip>
          </template>
        </v-select>
        <v-select
          v-model="powerRuck"
          @change="calc"
          :items="numberItems"
          label="Power Ruck - How many miles did you ruck at your power ruck?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              Power Ruck-(30# minimum) 10 pts awarded once per PAX if they
              complete a 10 mile ruck, or up to 20 points if you complete a 20
              mile ruck. For every mile you ruck between 10-20 miles you earn an
              extra point. (You must have a picture of the distance you traveled
              via the exercise tracker of your choice [strava,map my run, etc]).
            </v-tooltip>
          </template>
        </v-select>
        <v-select
          v-model="powerBike"
          @change="calc"
          :items="bikeNumerItems"
          label="Power Bike - How many miles did you bike at your power bike?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              Power Bike - 10 pts awarded once per PAX if they complete a 30
              mile ride or 20 points if you complete a 50 mile ride. There are
              no inbetween points on the Power Bike. (You must have a picture of
              the distance you traveled via the exercise tracker of your choice
              [strava,map my run, etc]).
            </v-tooltip>
          </template>
        </v-select>
        <v-text-field
          v-model="AOCount"
          @change="calc"
          type="number"
          label="Around the World - How many AO's did you hit this week?"
          max="8"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              NEW! Around the World - 10 Bonus Points to any PAX that hits more
              than 5 different AO’s this week. (You must have picture proof and
              confirm this to your captain once complete.)
            </v-tooltip>
          </template>
        </v-text-field>
        <v-select
          v-model="sixPack"
          @change="calc"
          :items="yesNoItems"
          label="Iron Horse - Did you have a six pack this week?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              NEW! Iron Horse - 10 Bonus points to any PAX that completes a
              6-Pack this week. (You must have picture proof and confirm this to
              your captain once complete.)
            </v-tooltip>
          </template>
        </v-select>
        <v-select
          v-model="bigBoy"
          @change="calc"
          :items="yesNoItems"
          label="Get Swole! - Did you complete 5 or more workouts with a BigBoy Coupon?"
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              NEW! Get Swole! - 10 Bonus Points to any PAX that completes 5 or
              more workouts with a BigBoy Coupon during the week. A BigBoy
              coupon is a 12”x8”x16” coupon, anything smaller will not count
            </v-tooltip>
          </template>
        </v-select>
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
        >
          <template v-slot:prepend>
            <v-tooltip bottom max-width="500">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              Pay Attention for Daily pop-up points throughout the week too! 5
              points each
            </v-tooltip>
          </template>
        </v-text-field>
      </v-col>
      <p class="font-weight-bold text-h5">Total Points: {{ totalPoints }}</p>
    </v-row>

    <v-row>
      <v-col class="mb-1">
        <p class="font-weight-bold text-h5">NOTES</p>
        <p>
          You can download the original rules posted in Slack
          <a href="/files/f3lgrules.pdf" download>here</a>
        </p>
        <p>
          You are only allowed to complete each Power event one time per week.
        </p>
        <p>
          i.e. If you do 15 miles on the Power Run you only score 15 points. If
          you want to score the other 3 pts for the run portion of the daily 3,
          you would end up running a total of 20 miles that day for 18 points
          total.
        </p>
        <p>
          The Daily 3 and Power events must be done in one attempt, one shot. In
          other words, there is NO SPLITTING UP distance. I.E. If you’re
          planning to bike 15 miles, you can NOT do 10 miles in the morning, 5
          in the afternoon. It must be done in one attempt, one shot.
        </p>
        <p>
          All fitness events are to be held outdoors. This is F3, not Orange
          Theory or Peloton, etc.
        </p>
        <p>
          A Run Club is a post and does NOT count for a daily 3 activity. I.E.
          Tuesday at the Outpost is Run Club which is worth 5 points, you can’t
          double dip and get 3 points for running 5 miles during Run Club too.
          These are separate activities.
        </p>
        <p class="font-weight-bold text-h5">FNG's</p>
        <p>
          Any PAX that brings an FNG gets to add them & their point total to
          their respective team.
        </p>
        <p class="font-weight-bold text-h5">POP-UPS</p>
        <p>
          Pay Attention for Daily pop-up points throughout the week too! 5
          points each
        </p>
        <p class="font-weight-bold text-h5">TOP “X”</p>
        <p>
          At the end of Lincoln Games, the Top “X” individual point earners will
          be eligible to compete in a future CSAUP experience to determine who’s
          best of the best. I.E. Top 20 PAX, etc. Details TBA in the near
          future.
        </p>
        <p>Good Luck!</p>
      </v-col>
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
