# `provider`

Refer to the Terraform Registory for docs: [`ionoscloud`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.4/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ionoscloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IonoscloudProvider <a name="IonoscloudProvider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.4/docs ionoscloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v8/provider"

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
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries">ResetRetries</a></code> | *No description.* |
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

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries"></a>

```go
func ResetRetries()
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

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v8/provider"

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
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v8/provider"

provider.IonoscloudProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v8/provider"

provider.IonoscloudProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

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
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
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

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

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

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

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
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v8/provider"

&provider.IonoscloudProviderConfig {
	Alias: *string,
	Endpoint: *string,
	Password: *string,
	Retries: *f64,
	Token: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | IonosCloud REST API URL. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password">Password</a></code> | <code>*string</code> | IonosCloud password for API operations. If token is provided, token is preferred. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries">Retries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.4/docs#retries IonoscloudProvider#retries}. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token">Token</a></code> | <code>*string</code> | IonosCloud bearer token for API operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username">Username</a></code> | <code>*string</code> | IonosCloud username for API operations. If token is provided, token is preferred. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.4/docs#alias IonoscloudProvider#alias}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

IonosCloud REST API URL.

Usually not necessary to be set, SDKs know internally how to route requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.4/docs#endpoint IonoscloudProvider#endpoint}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

IonosCloud password for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.4/docs#password IonoscloudProvider#password}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.4/docs#retries IonoscloudProvider#retries}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

IonosCloud bearer token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.4/docs#token IonoscloudProvider#token}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

IonosCloud username for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.4/docs#username IonoscloudProvider#username}

---



