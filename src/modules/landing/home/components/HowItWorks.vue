<template>
  <div>
    <div class="container py-5">
      <h1 class="font-weight-bold text-center">How it works</h1>
      <hr
        class="mx-auto mb-4"
        style="width: 60px; border-bottom: 4px solid var(--tertiary-color)"
      />
      <div class="d-lg-flex" style="gap: 20px">
        <router-link class="col-md-3 how-it-works-card" to="/register">
          <div class="icon">
            <svg width="32" height="32" viewBox="0 0 15 15">
              <path
                fill="currentColor"
                d="M4.5 6.995H4v1h.5v-1Zm6 1h.5v-1h-.5v1ZM4.5 10H4v1h.5v-1Zm6 1h.5v-1h-.5v1Zm-6-7.003H4v1h.5v-1Zm6 1h.5v-1h-.5v1Zm3-1.497h.5v-.207l-.146-.147l-.354.354Zm-3-3l.354-.354L10.707 0H10.5v.5Zm-6 7.495h6v-1h-6v1ZM4.5 11h6v-1h-6v1Zm0-6.003h6v-1h-6v1Zm8 9.003h-10v1h10v-1ZM2 13.5v-12H1v12h1Zm11-10v10h1v-10h-1ZM2.5 1h8V0h-8v1Zm7.646-.146l3 3l.708-.708l-3-3l-.708.708ZM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15v-1Zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1ZM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5h1Z"
              />
            </svg>
          </div>
          <h4>Registration</h4>
          <p class="text-dark">
            Create an account in less than 1 minute. Join CroxxTalent and find
            opportunities.
          </p>
        </router-link>

        <router-link to="/register" class="col-md-3 how-it-works-card">
          <div class="icon">
            <svg width="32" height="32" viewBox="0 0 2048 2048">
              <path
                fill="currentColor"
                d="M768 1024q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-117 35-229t101-207t157-169t203-113q-56-36-100-83t-76-103t-47-118t-17-130q0-106 40-199t109-163T568 40T768 0q106 0 199 40t163 109t110 163t40 200q0 67-16 129t-48 119t-75 103t-101 83q69 26 132 64t117 89l-87 95q-89-82-201-126t-233-44zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149zm1530 1027q6 30 6 61t-6 61l124 51l-49 119l-124-52q-35 51-86 86l52 124l-119 49l-51-124q-30 6-61 6t-61-6l-51 124l-119-49l52-124q-51-35-86-86l-124 52l-49-119l124-51q-6-30-6-61t6-61l-124-51l49-119l124 52q35-51 86-86l-52-124l119-49l51 124q30-6 61-6t61 6l51-124l119 49l-52 124q51 35 86 86l124-52l49 119l-124 51zm-314 253q40 0 75-15t61-41t41-61t15-75q0-40-15-75t-41-61t-61-41t-75-15q-40 0-75 15t-61 41t-41 61t-15 75q0 40 15 75t41 61t61 41t75 15z"
              />
            </svg>
          </div>
          <h4>Setup Profile</h4>
          <p class="text-dark">Quickly setup your profile and settings.</p>
        </router-link>

        <router-link to="/register" class="col-md-3 how-it-works-card">
          <div class="icon">
            <svg width="32" height="32" viewBox="0 0 20 20">
              <g fill="currentColor">
                <path
                  d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01Z"
                />
                <path
                  fill-rule="evenodd"
                  d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24v-.51ZM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2v-15Zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1Z"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
          </div>
          <h4>Build CV</h4>
          <p class="text-dark">
            Build your CV using our live web cv builder. Build a beautiful cv
            and showcase relevant skills for employers to see.
          </p>
        </router-link>

        <router-link to="/register" class="col-md-3 how-it-works-card">
          <div class="icon">
            <svg width="32" height="32" viewBox="0 0 2048 2048">
              <path
                fill="currentColor"
                d="M2048 128v768q-58-57-128-95V640H128v1152h707l-30 30q-13 13-23 28t-20 30t-16 40H0V128h384V0h128v128h1024V0h128v128h384zm-128 384V256h-256v128h-128V256H512v128H384V256H128v256h1792zm-256 384q79 0 149 30t122 82t82 123t30 149q0 80-30 149t-82 122t-122 83t-149 30q-60 0-116-18t-106-54l-437 437q-19 19-45 19t-45-19t-19-45q0-26 19-45l437-437q-35-49-53-105t-19-117q0-79 30-149t82-122t122-83t150-30zm0 640q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20z"
              />
            </svg>
          </div>
          <h4>Apply for Jobs</h4>
          <p class="text-dark">
            Check available jobs. Start sending your CV to 100’s of companies.
            Apply for multiple roles.
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
