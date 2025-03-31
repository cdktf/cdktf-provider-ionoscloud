# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ionoscloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IonoscloudProvider <a name="IonoscloudProvider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs ionoscloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/provider"

provider.NewIonoscloudProvider(scope Construct, id *string, config IonoscloudProviderConfig) IonoscloudProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig">IonoscloudProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig">IonoscloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetContractNumber">ResetContractNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3AccessKey">ResetS3AccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3Region">ResetS3Region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3SecretKey">ResetS3SecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetContractNumber` <a name="ResetContractNumber" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetContractNumber"></a>

```go
func ResetContractNumber()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetS3AccessKey` <a name="ResetS3AccessKey" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3AccessKey"></a>

```go
func ResetS3AccessKey()
```

##### `ResetS3Region` <a name="ResetS3Region" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3Region"></a>

```go
func ResetS3Region()
```

##### `ResetS3SecretKey` <a name="ResetS3SecretKey" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetS3SecretKey"></a>

```go
func ResetS3SecretKey()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetUsername"></a>

```go
func ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IonoscloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/provider"

provider.IonoscloudProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/provider"

provider.IonoscloudProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/provider"

provider.IonoscloudProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/provider"

provider.IonoscloudProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IonoscloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IonoscloudProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IonoscloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IonoscloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.contractNumberInput">ContractNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3AccessKeyInput">S3AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3RegionInput">S3RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3SecretKeyInput">S3SecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.contractNumber">ContractNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3AccessKey">S3AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3Region">S3Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3SecretKey">S3SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ContractNumberInput`<sup>Optional</sup> <a name="ContractNumberInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.contractNumberInput"></a>

```go
func ContractNumberInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `S3AccessKeyInput`<sup>Optional</sup> <a name="S3AccessKeyInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3AccessKeyInput"></a>

```go
func S3AccessKeyInput() *string
```

- *Type:* *string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3RegionInput"></a>

```go
func S3RegionInput() *string
```

- *Type:* *string

---

##### `S3SecretKeyInput`<sup>Optional</sup> <a name="S3SecretKeyInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3SecretKeyInput"></a>

```go
func S3SecretKeyInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ContractNumber`<sup>Optional</sup> <a name="ContractNumber" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.contractNumber"></a>

```go
func ContractNumber() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `S3AccessKey`<sup>Optional</sup> <a name="S3AccessKey" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3AccessKey"></a>

```go
func S3AccessKey() *string
```

- *Type:* *string

---

##### `S3Region`<sup>Optional</sup> <a name="S3Region" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3Region"></a>

```go
func S3Region() *string
```

- *Type:* *string

---

##### `S3SecretKey`<sup>Optional</sup> <a name="S3SecretKey" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.s3SecretKey"></a>

```go
func S3SecretKey() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IonoscloudProviderConfig <a name="IonoscloudProviderConfig" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/provider"

&provider.IonoscloudProviderConfig {
	Alias: *string,
	ContractNumber: *string,
	Endpoint: *string,
	Insecure: interface{},
	Password: *string,
	Retries: *f64,
	S3AccessKey: *string,
	S3Region: *string,
	S3SecretKey: *string,
	Token: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.contractNumber">ContractNumber</a></code> | <code>*string</code> | To be set only for reseller accounts. Allows to run terraform on a contract number under a reseller account. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | IonosCloud REST API URL. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.insecure">Insecure</a></code> | <code>interface{}</code> | This field is to be set only for testing purposes. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password">Password</a></code> | <code>*string</code> | IonosCloud password for API operations. If token is provided, token is preferred. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries">Retries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#retries IonoscloudProvider#retries}. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3AccessKey">S3AccessKey</a></code> | <code>*string</code> | Access key for IONOS Object Storage operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3Region">S3Region</a></code> | <code>*string</code> | Region for IONOS Object Storage operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3SecretKey">S3SecretKey</a></code> | <code>*string</code> | Secret key for IONOS Object Storage operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token">Token</a></code> | <code>*string</code> | IonosCloud bearer token for API operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username">Username</a></code> | <code>*string</code> | IonosCloud username for API operations. If token is provided, token is preferred. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#alias IonoscloudProvider#alias}

---

##### `ContractNumber`<sup>Optional</sup> <a name="ContractNumber" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.contractNumber"></a>

```go
ContractNumber *string
```

- *Type:* *string

To be set only for reseller accounts. Allows to run terraform on a contract number under a reseller account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#contract_number IonoscloudProvider#contract_number}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

IonosCloud REST API URL.

Usually not necessary to be set, SDKs know internally how to route requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#endpoint IonoscloudProvider#endpoint}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

This field is to be set only for testing purposes.

It is not recommended to set this field in production environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#insecure IonoscloudProvider#insecure}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

IonosCloud password for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#password IonoscloudProvider#password}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#retries IonoscloudProvider#retries}.

---

##### `S3AccessKey`<sup>Optional</sup> <a name="S3AccessKey" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3AccessKey"></a>

```go
S3AccessKey *string
```

- *Type:* *string

Access key for IONOS Object Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#s3_access_key IonoscloudProvider#s3_access_key}

---

##### `S3Region`<sup>Optional</sup> <a name="S3Region" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3Region"></a>

```go
S3Region *string
```

- *Type:* *string

Region for IONOS Object Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#s3_region IonoscloudProvider#s3_region}

---

##### `S3SecretKey`<sup>Optional</sup> <a name="S3SecretKey" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.s3SecretKey"></a>

```go
S3SecretKey *string
```

- *Type:* *string

Secret key for IONOS Object Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#s3_secret_key IonoscloudProvider#s3_secret_key}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

IonosCloud bearer token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#token IonoscloudProvider#token}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

IonosCloud username for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs#username IonoscloudProvider#username}

---



