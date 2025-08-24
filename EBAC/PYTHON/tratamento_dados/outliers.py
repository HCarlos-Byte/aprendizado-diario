import pandas as pd
from scipy import stats

pd.set_option('display.width', None)
df = pd.read_csv('tratamento_dados/clientes_limpeza.csv')

df_filtro_basico = df[df['idade'] > 100]
print('Filtro básico \n', df_filtro_basico[['nome', 'idade']])

#identificar outliers com Z-score
z_scores = stats.zscore(df['idade'].dropna())
outliers_z = df[z_scores >= 3]
print('Outliers pelo Z-score: \n', outliers_z)

#filtrar outliers com z-score
df_zscore = df[(stats.zscore(df['idade']) < 3)]

#identificar outliers com IQR
Q1 = df['idade'].quantile(0.25)
Q3 = df['idade'].quantile(0.75)
IQR = Q3 - Q1

limite_baixo = Q1 - 1.5 * IQR
limite_alto = Q3 + 1.5 * IQR

print('Limites IQR: ', limite_alto, limite_baixo)

outliers_iqr = df[(df['idade'] < limite_baixo) | (df['idade'] > limite_alto)]
print('Outliers pelo IQR: \n', outliers_iqr)

#filtrar outliers com IQR
df_iqr = df[(df['idade'] >= limite_baixo) & (df['idade'] <= limite_alto)]

limite_baixo = 18
limite_alto = 100
df_iqr = df[(df['idade'] >= limite_baixo)& (df['idade'] <= limite_alto)]

#filtrar endereços invalidos
df['endereco'] = df['endereco'].apply(lambda x: 'Endereço invalido' if len(x.split('\n')) <3 else x)

#tratar campos de texto
df['nome'] = df['nome'].apply(lambda x: 'Nome invalido' if isinstance(x, str) and len(x) > 50 else x)

print('Dados com Outliers tratadas: \n', df)

#salvar dataframe
df.to_csv('tratamento_dados/clientes_remove_outliers.csv', index=False)