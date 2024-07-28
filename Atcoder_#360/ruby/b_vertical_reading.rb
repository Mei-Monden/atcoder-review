input = gets.chomp.split
S = input[0]
T = input[1]

n = S.length
t_len = T.length

found = false

(1...n).each do |w|
  (1..w).each do |c|
    new_string = ""
    idx = c - 1

    while idx < n
      new_string << S[idx] if idx < n
      idx += w
    end

    if new_string == T
      found = true
      break
    end
  end

  break if found
end

puts found ? "Yes" : "No"
