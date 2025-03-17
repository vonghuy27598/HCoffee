namespace HCoffeeWebAPI.Helpers
{
    public class GenerateRandomOTP
    {
        public string GenerateOTP(int iOTPLength)
        {
            string[] saAllowedCharacters = { "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" };
            var sOTP = String.Empty;

            var sTempChars = String.Empty;

            Random rand = new Random();

            for (int i = 1; i <= iOTPLength; i++)

            {

                int p = rand.Next(0, saAllowedCharacters.Length);

                sTempChars = saAllowedCharacters[rand.Next(0, saAllowedCharacters.Length)];

                sOTP += sTempChars;

            }

            return sOTP;

        }
    }
}
