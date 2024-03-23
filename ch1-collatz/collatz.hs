collatz :: [Int] -> [Int]
collatz l
  | head l == 1 = l
  | even (head l) = collatz $ head l `div` 2 : l
  | otherwise = collatz $ head l * 3 + 1 : l

main = do
  putStrLn "Enter starting number: "
  start <- getLine
  putStrLn . unwords . map show $ reverse $ collatz [read start :: Int]
