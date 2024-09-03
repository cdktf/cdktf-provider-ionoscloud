# `autoCertificateProvider` Submodule <a name="`autoCertificateProvider` Submodule" id="@cdktf/provider-ionoscloud.autoCertificateProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoCertificateProvider <a name="AutoCertificateProvider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider ionoscloud_auto_certificate_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

autocertificateprovider.NewAutoCertificateProvider(scope Construct, id *string, config AutoCertificateProviderConfig) AutoCertificateProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig">AutoCertificateProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig">AutoCertificateProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putExternalAccountBinding">PutExternalAccountBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetExternalAccountBinding">ResetExternalAccountBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalAccountBinding` <a name="PutExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putExternalAccountBinding"></a>

```go
func PutExternalAccountBinding(value AutoCertificateProviderExternalAccountBinding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putExternalAccountBinding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putTimeouts"></a>

```go
func PutTimeouts(value AutoCertificateProviderTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts">AutoCertificateProviderTimeouts</a>

---

##### `ResetExternalAccountBinding` <a name="ResetExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetExternalAccountBinding"></a>

```go
func ResetExternalAccountBinding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutoCertificateProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

autocertificateprovider.AutoCertificateProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

autocertificateprovider.AutoCertificateProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

autocertificateprovider.AutoCertificateProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

autocertificateprovider.AutoCertificateProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutoCertificateProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutoCertificateProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutoCertificateProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutoCertificateProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.externalAccountBinding">ExternalAccountBinding</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference">AutoCertificateProviderExternalAccountBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference">AutoCertificateProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.externalAccountBindingInput">ExternalAccountBindingInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.server">Server</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalAccountBinding`<sup>Required</sup> <a name="ExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.externalAccountBinding"></a>

```go
func ExternalAccountBinding() AutoCertificateProviderExternalAccountBindingOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference">AutoCertificateProviderExternalAccountBindingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.timeouts"></a>

```go
func Timeouts() AutoCertificateProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference">AutoCertificateProviderTimeoutsOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ExternalAccountBindingInput`<sup>Optional</sup> <a name="ExternalAccountBindingInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.externalAccountBindingInput"></a>

```go
func ExternalAccountBindingInput() AutoCertificateProviderExternalAccountBinding
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoCertificateProviderConfig <a name="AutoCertificateProviderConfig" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

&autocertificateprovider.AutoCertificateProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Email: *string,
	Location: *string,
	Name: *string,
	Server: *string,
	ExternalAccountBinding: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.email">Email</a></code> | <code>*string</code> | The email address of the certificate requester. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.location">Location</a></code> | <code>*string</code> | The location of the certificate provider. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.name">Name</a></code> | <code>*string</code> | The name of the certificate provider. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.server">Server</a></code> | <code>*string</code> | The URL of the certificate provider. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.externalAccountBinding">ExternalAccountBinding</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a></code> | external_account_binding block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#id AutoCertificateProvider#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts">AutoCertificateProviderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

The email address of the certificate requester.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#email AutoCertificateProvider#email}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the certificate provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#location AutoCertificateProvider#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the certificate provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#name AutoCertificateProvider#name}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.server"></a>

```go
Server *string
```

- *Type:* *string

The URL of the certificate provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#server AutoCertificateProvider#server}

---

##### `ExternalAccountBinding`<sup>Optional</sup> <a name="ExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.externalAccountBinding"></a>

```go
ExternalAccountBinding AutoCertificateProviderExternalAccountBinding
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a>

external_account_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#external_account_binding AutoCertificateProvider#external_account_binding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#id AutoCertificateProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.timeouts"></a>

```go
Timeouts AutoCertificateProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts">AutoCertificateProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#timeouts AutoCertificateProvider#timeouts}

---

### AutoCertificateProviderExternalAccountBinding <a name="AutoCertificateProviderExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

&autocertificateprovider.AutoCertificateProviderExternalAccountBinding {
	KeyId: *string,
	KeySecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.property.keyId">KeyId</a></code> | <code>*string</code> | The key ID of the external account binding. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.property.keySecret">KeySecret</a></code> | <code>*string</code> | The secret of the external account binding. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

The key ID of the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#key_id AutoCertificateProvider#key_id}

---

##### `KeySecret`<sup>Required</sup> <a name="KeySecret" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.property.keySecret"></a>

```go
KeySecret *string
```

- *Type:* *string

The secret of the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#key_secret AutoCertificateProvider#key_secret}

---

### AutoCertificateProviderTimeouts <a name="AutoCertificateProviderTimeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

&autocertificateprovider.AutoCertificateProviderTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#create AutoCertificateProvider#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#default AutoCertificateProvider#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#delete AutoCertificateProvider#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#update AutoCertificateProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#create AutoCertificateProvider#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#default AutoCertificateProvider#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#delete AutoCertificateProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/auto_certificate_provider#update AutoCertificateProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoCertificateProviderExternalAccountBindingOutputReference <a name="AutoCertificateProviderExternalAccountBindingOutputReference" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

autocertificateprovider.NewAutoCertificateProviderExternalAccountBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoCertificateProviderExternalAccountBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keySecretInput">KeySecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keySecret">KeySecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `KeySecretInput`<sup>Optional</sup> <a name="KeySecretInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keySecretInput"></a>

```go
func KeySecretInput() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeySecret`<sup>Required</sup> <a name="KeySecret" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keySecret"></a>

```go
func KeySecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() AutoCertificateProviderExternalAccountBinding
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a>

---


### AutoCertificateProviderTimeoutsOutputReference <a name="AutoCertificateProviderTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/autocertificateprovider"

autocertificateprovider.NewAutoCertificateProviderTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoCertificateProviderTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



