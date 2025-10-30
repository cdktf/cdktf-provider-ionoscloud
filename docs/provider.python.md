# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ionoscloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IonoscloudProvider <a name="IonoscloudProvider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs ionoscloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import provider

provider.IonoscloudProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  contract_number: str = None,
  endpoint: str = None,
  insecure: bool | IResolvable = None,
  password: str = None,
  retries: typing.Union[int, float] = None,
  s3_access_key: str = None,
  s3_region: str = None,
  s3_secret_key: str = None,
  token: str = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.contractNumber">contract_number</a></code> | <code>str</code> | To be set only for reseller accounts. Allows to run terraform on a contract number under a reseller account. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | IonosCloud REST API URL. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.insecure">insecure</a></code> | <code>bool \| cdktf.IResolvable</code> | This field is to be set only for testing purposes. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | IonosCloud password for API operations. If token is provided, token is preferred. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#retries IonoscloudProvider#retries}. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.s3AccessKey">s3_access_key</a></code> | <code>str</code> | Access key for IONOS Object Storage operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.s3Region">s3_region</a></code> | <code>str</code> | Region for IONOS Object Storage operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.s3SecretKey">s3_secret_key</a></code> | <code>str</code> | Secret key for IONOS Object Storage operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | IonosCloud bearer token for API operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.username">username</a></code> | <code>str</code> | IonosCloud username for API operations. If token is provided, token is preferred. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#alias IonoscloudProvider#alias}

---

##### `contract_number`<sup>Optional</sup> <a name="contract_number" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.contractNumber"></a>

- *Type:* str

To be set only for reseller accounts. Allows to run terraform on a contract number under a reseller account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#contract_number IonoscloudProvider#contract_number}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.endpoint"></a>

- *Type:* str

IonosCloud REST API URL.

Usually not necessary to be set, SDKs know internally how to route requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#endpoint IonoscloudProvider#endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.insecure"></a>

- *Type:* bool | cdktf.IResolvable

This field is to be set only for testing purposes.

It is not recommended to set this field in production environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#insecure IonoscloudProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.password"></a>

- *Type:* str

IonosCloud password for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#password IonoscloudProvider#password}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#retries IonoscloudProvider#retries}.

---

##### `s3_access_key`<sup>Optional</sup> <a name="s3_access_key" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.s3AccessKey"></a>

- *Type:* str

Access key for IONOS Object Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#s3_access_key IonoscloudProvider#s3_access_key}

---

##### `s3_region`<sup>Optional</sup> <a name="s3_region" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.s3Region"></a>

- *Type:* str

Region for IONOS Object Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#s3_region IonoscloudProvider#s3_region}

---

##### `s3_secret_key`<sup>Optional</sup> <a name="s3_secret_key" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.s3SecretKey"></a>

- *Type:* str

Secret key for IONOS Object Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#s3_secret_key IonoscloudProvider#s3_secret_key}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.token"></a>

- *Type:* str

IonosCloud bearer token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#token IonoscloudProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.username"></a>

- *Type:* str

IonosCloud username for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#username IonoscloudProvider#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetContractNumber">reset_contract_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3AccessKey">reset_s3_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3Region">reset_s3_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3SecretKey">reset_s3_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_contract_number` <a name="reset_contract_number" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetContractNumber"></a>

```python
def reset_contract_number() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_s3_access_key` <a name="reset_s3_access_key" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3AccessKey"></a>

```python
def reset_s3_access_key() -> None
```

##### `reset_s3_region` <a name="reset_s3_region" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3Region"></a>

```python
def reset_s3_region() -> None
```

##### `reset_s3_secret_key` <a name="reset_s3_secret_key" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3SecretKey"></a>

```python
def reset_s3_secret_key() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IonoscloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import provider

provider.IonoscloudProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import provider

provider.IonoscloudProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_ionoscloud import provider

provider.IonoscloudProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import provider

provider.IonoscloudProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IonoscloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IonoscloudProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IonoscloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IonoscloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.contractNumberInput">contract_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.insecureInput">insecure_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3AccessKeyInput">s3_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3RegionInput">s3_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3SecretKeyInput">s3_secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.contractNumber">contract_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.insecure">insecure</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3AccessKey">s3_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3Region">s3_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3SecretKey">s3_secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `contract_number_input`<sup>Optional</sup> <a name="contract_number_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.contractNumberInput"></a>

```python
contract_number_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.insecureInput"></a>

```python
insecure_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_key_input`<sup>Optional</sup> <a name="s3_access_key_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3AccessKeyInput"></a>

```python
s3_access_key_input: str
```

- *Type:* str

---

##### `s3_region_input`<sup>Optional</sup> <a name="s3_region_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3RegionInput"></a>

```python
s3_region_input: str
```

- *Type:* str

---

##### `s3_secret_key_input`<sup>Optional</sup> <a name="s3_secret_key_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3SecretKeyInput"></a>

```python
s3_secret_key_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `contract_number`<sup>Optional</sup> <a name="contract_number" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.contractNumber"></a>

```python
contract_number: str
```

- *Type:* str

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.insecure"></a>

```python
insecure: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_key`<sup>Optional</sup> <a name="s3_access_key" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3AccessKey"></a>

```python
s3_access_key: str
```

- *Type:* str

---

##### `s3_region`<sup>Optional</sup> <a name="s3_region" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3Region"></a>

```python
s3_region: str
```

- *Type:* str

---

##### `s3_secret_key`<sup>Optional</sup> <a name="s3_secret_key" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3SecretKey"></a>

```python
s3_secret_key: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IonoscloudProviderConfig <a name="IonoscloudProviderConfig" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import provider

provider.IonoscloudProviderConfig(
  alias: str = None,
  contract_number: str = None,
  endpoint: str = None,
  insecure: bool | IResolvable = None,
  password: str = None,
  retries: typing.Union[int, float] = None,
  s3_access_key: str = None,
  s3_region: str = None,
  s3_secret_key: str = None,
  token: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.contractNumber">contract_number</a></code> | <code>str</code> | To be set only for reseller accounts. Allows to run terraform on a contract number under a reseller account. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint">endpoint</a></code> | <code>str</code> | IonosCloud REST API URL. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.insecure">insecure</a></code> | <code>bool \| cdktf.IResolvable</code> | This field is to be set only for testing purposes. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password">password</a></code> | <code>str</code> | IonosCloud password for API operations. If token is provided, token is preferred. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#retries IonoscloudProvider#retries}. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3AccessKey">s3_access_key</a></code> | <code>str</code> | Access key for IONOS Object Storage operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3Region">s3_region</a></code> | <code>str</code> | Region for IONOS Object Storage operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3SecretKey">s3_secret_key</a></code> | <code>str</code> | Secret key for IONOS Object Storage operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token">token</a></code> | <code>str</code> | IonosCloud bearer token for API operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username">username</a></code> | <code>str</code> | IonosCloud username for API operations. If token is provided, token is preferred. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#alias IonoscloudProvider#alias}

---

##### `contract_number`<sup>Optional</sup> <a name="contract_number" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.contractNumber"></a>

```python
contract_number: str
```

- *Type:* str

To be set only for reseller accounts. Allows to run terraform on a contract number under a reseller account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#contract_number IonoscloudProvider#contract_number}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

IonosCloud REST API URL.

Usually not necessary to be set, SDKs know internally how to route requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#endpoint IonoscloudProvider#endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.insecure"></a>

```python
insecure: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

This field is to be set only for testing purposes.

It is not recommended to set this field in production environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#insecure IonoscloudProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

IonosCloud password for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#password IonoscloudProvider#password}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#retries IonoscloudProvider#retries}.

---

##### `s3_access_key`<sup>Optional</sup> <a name="s3_access_key" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3AccessKey"></a>

```python
s3_access_key: str
```

- *Type:* str

Access key for IONOS Object Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#s3_access_key IonoscloudProvider#s3_access_key}

---

##### `s3_region`<sup>Optional</sup> <a name="s3_region" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3Region"></a>

```python
s3_region: str
```

- *Type:* str

Region for IONOS Object Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#s3_region IonoscloudProvider#s3_region}

---

##### `s3_secret_key`<sup>Optional</sup> <a name="s3_secret_key" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3SecretKey"></a>

```python
s3_secret_key: str
```

- *Type:* str

Secret key for IONOS Object Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#s3_secret_key IonoscloudProvider#s3_secret_key}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

IonosCloud bearer token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#token IonoscloudProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username"></a>

```python
username: str
```

- *Type:* str

IonosCloud username for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs#username IonoscloudProvider#username}

---



